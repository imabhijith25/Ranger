import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { oneDark } from "@uiw/react-codemirror";
import { Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { AutoComplete } from "../ui/autocomplete";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ResponseHeaders } from "@/lib/utils";
import InfoScreen from "./infoScreen";
const getDataFromLocalStorage = (key: any) => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get([key], (result) => {
            if (chrome.runtime.lastError) {
                console.error(
                    "Error fetching data from storage:",
                    chrome.runtime.lastError
                );
                reject(new Error("Error fetching data from storage"));
            } else {
                resolve(result[key]);
            }
        });
    });
};

const MockScreen = ({ selectedItem }: any) => {
    const [saveState, setSaveState] = useState("save_mock");
    const [mockData, setMockData] = useState({
        statusCode: 200,
        url: "",
        responseHeaders: [
            {
                name: "Content-Type",
                value: "application/json",
            },
        ],
        method: "GET",
        payloadJson: "",
    });
    const [mockEnabled, setMockEnabled] = useState(false);
    useEffect(() => {
        if (selectedItem) {
            const isMockedFunction = async () => {
                const isMocked: any = await getDataFromLocalStorage("mocks");
                if (isMocked?.hasOwnProperty(selectedItem?.url)) {
                    setMockEnabled(true);
                    console.log("Entering this moot");
                    setMockData({
                        url: selectedItem?.url,
                        payloadJson: isMocked[selectedItem?.url].payloadJson,
                        method: isMocked[selectedItem?.url].method,
                        responseHeaders:
                            isMocked[selectedItem?.url].responseHeaders,
                        statusCode: isMocked[selectedItem?.url].statusCode,
                    });
                } else {
                    setMockEnabled(false);
                    setMockData({
                        statusCode: 200,
                        url: selectedItem?.url,
                        responseHeaders: [
                            {
                                name: "Content-Type",
                                value: "application/json",
                            },
                        ],
                        method: "GET",
                        payloadJson: "",
                    });
                }
            };

            isMockedFunction();
        }
    }, [selectedItem]);

    const submitMock = () => {
        chrome.runtime
            .sendMessage({
                action: saveState,
                data: [mockData],
            })
            .then((result) => {
                console.log(result);
                setMockEnabled(true);
                setSaveState("subsequent_mock");
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            });
    };

    return (
        <>
            <Tabs
                defaultValue={"mock"}
                className="w-[100%] border rounded-tr rounded-br border-borderBg pb-2 pt-2"
            >
                <TabsList className="border-b-2 border-borderBg pb-3">
                    <TabsTrigger value="mock">Mock</TabsTrigger>
                    <TabsTrigger value="info">API Info</TabsTrigger>
                    <TabsTrigger value="delay">Delay</TabsTrigger>
                </TabsList>
                <TabsContent value="info" className="p-3">
                    <InfoScreen selectedItem={selectedItem} />
                </TabsContent>
                <TabsContent value="mock" className="p-3">
                    {" "}
                    <div className="max-w-4xl w-full flex flex-col justify-center items-center pt-3">
                        <div className="w-full">
                            <p className="font-extrabold mb-4 text-center">
                                Mock Response
                            </p>
                            {!selectedItem && (
                                <p className="mt-4 text-sm text-muted-foreground flex justify-center text-center">
                                    Please select a URL from the left panel to
                                    begin mocking an existing request, or create
                                    a new mock by entering a URL here
                                </p>
                            )}
                            {mockEnabled && (
                                <Alert variant="default" className="mb-4">
                                    <AlertTitle className="font-bold text-md">
                                        Mocking Enabled
                                    </AlertTitle>
                                    <AlertDescription>
                                        Please go back to your website and
                                        refresh multiple times.
                                    </AlertDescription>
                                    <Button
                                        className="mt-4"
                                        onClick={() => {
                                            toast("Disabled", {
                                                description:
                                                    "Mocking is disabled for the current URL.",
                                            });
                                            setMockEnabled(false);
                                        }}
                                    >
                                        Disable Mocking
                                    </Button>
                                </Alert>
                            )}
                            <div className="flex flex-row gap-3 mt-3 mb-3">
                                <div>
                                    <Label htmlFor="status">Status Code</Label>
                                    <Input
                                        id="status"
                                        placeholder="eg: 200"
                                        className="w-[100px] "
                                        value={mockData.statusCode}
                                        onChange={(e) => {
                                            setMockData({
                                                ...mockData,
                                                statusCode: Number(
                                                    e.target.value
                                                ),
                                            });
                                        }}
                                    ></Input>
                                </div>

                                <div>
                                    <Label htmlFor="methid">Method</Label>
                                    <div id="method">
                                        <Select
                                            value={mockData.method}
                                            onValueChange={(e) => {
                                                setMockData({
                                                    ...mockData,
                                                    method: e,
                                                });
                                            }}
                                        >
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select Method" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="GET">
                                                        GET
                                                    </SelectItem>
                                                    <SelectItem value="POST">
                                                        POST
                                                    </SelectItem>
                                                    <SelectItem value="PUT">
                                                        PUT
                                                    </SelectItem>
                                                    <SelectItem value="DELETE">
                                                        DELETE
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <Label htmlFor="url">URL to Mock</Label>
                                    <Input
                                        id="url"
                                        disabled={selectedItem}
                                        value={mockData.url}
                                        onChange={(e) => {
                                            setMockData({
                                                ...mockData,
                                                url: e.target.value,
                                            });
                                        }}
                                        placeholder="Add URL or /endpoint/"
                                    ></Input>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center gap-3">
                                    <Label>Response Headers</Label>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Info color="yellow"></Info>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    Try to set the response
                                                    header as similar to the
                                                    original API to prevent
                                                    unnecessary errors
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                {mockData.responseHeaders.map((item, index) => (
                                    <div
                                        className="flex items-center gap-2 mt-2"
                                        key={index}
                                    >
                                        <div className="basis-1/2">
                                            <AutoComplete
                                                options={ResponseHeaders}
                                                emptyMessage="No results."
                                                placeholder="Add Response Header"
                                                isLoading={false}
                                                onValueChange={(e) => {
                                                    const temp = [
                                                        ...mockData.responseHeaders,
                                                    ];
                                                    temp[index].name = e.value;
                                                    setMockData({
                                                        ...mockData,
                                                        responseHeaders: temp,
                                                    });
                                                }}
                                                value={{
                                                    label: item.name.replace(
                                                        "-",
                                                        " "
                                                    ),
                                                    value: item.name,
                                                }}
                                                disabled={false}
                                            />
                                        </div>

                                        <Input
                                            placeholder="Value"
                                            className="basis-1/2"
                                            value={item.value}
                                            onChange={(e) => {
                                                const temp = [
                                                    ...mockData.responseHeaders,
                                                ];
                                                temp[index].value =
                                                    e.target.value;
                                                setMockData({
                                                    ...mockData,
                                                    responseHeaders: temp,
                                                });
                                            }}
                                        ></Input>
                                    </div>
                                ))}
                                <div className="flex justify-end">
                                    <Button
                                        variant={"link"}
                                        onClick={() => {
                                            setMockData({
                                                ...mockData,
                                                responseHeaders: [
                                                    ...mockData.responseHeaders,
                                                    { name: "", value: "" },
                                                ],
                                            });
                                        }}
                                    >
                                        Add More
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <Label>JSON Response</Label>
                                <div className="bg-inputBg pt-5 pb-5">
                                    <CodeMirror
                                        value={mockData.payloadJson}
                                        height="400px"
                                        theme={oneDark}
                                        extensions={[json()]}
                                        onChange={(val) => {
                                            setMockData({
                                                ...mockData,
                                                payloadJson: val,
                                            });
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Button
                                    className="mt-3 "
                                    onClick={() => {
                                        submitMock();
                                    }}
                                >
                                    Create Mock
                                </Button>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </>
    );
};

export default MockScreen;
