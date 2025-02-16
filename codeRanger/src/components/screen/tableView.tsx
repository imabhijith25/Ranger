import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import MockScreen from "./mockScreen";
import { Label } from "../ui/label";
import { mockResponseList, mode } from "@/lib/utils";

const TableView = () => {
    const [responseList, setResponseList] = useState<any[]>([]);
    const [searchItem, setSearchItem] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    const [newMockStarted, setNewMockStarted] = useState(false);
    const [onlyFetchXhr, setOnlyFetchXhr] = useState<boolean | undefined>(
        false
    );

    // const getDataFromLocalStorage = (key: any) => {
    //     return new Promise((resolve, reject) => {
    //         chrome.storage.local.get([key], (result) => {
    //             if (chrome.runtime.lastError) {
    //                 console.error(
    //                     "Error fetching data from storage:",
    //                     chrome.runtime.lastError
    //                 );
    //                 reject(false);
    //             } else {
    //                 resolve(result[key]);
    //             }
    //         });
    //     });
    // };

    // const isUrlPartOfMock = async (url: string) => {
    //     const isit = await getDataFromLocalStorage(url);
    //     console.log(isit);
    //     if (isit) return true;
    //     return false;
    // };
    useEffect(() => {
        document.addEventListener("newMock", () => {
            setNewMockStarted(true);
            setSelectedItem(null);
        });
        if (mode == "development") {
            setResponseList(mockResponseList);
        } else {
            chrome.runtime.onMessage.addListener(async (message) => {
                if (message.action == "incomingRequest") {
                    console.log("the details are", message.detail);
                    setResponseList([...message.detail]);
                }
            });
        }
    }, []);

    return (
        <div className="mt-8 w-full">
            <div className="flex gap-5  pb-2">
                <Input
                    placeholder="Search for network calls"
                    className="w-[400px]"
                    value={searchItem}
                    onChange={(e) => {
                        setSearchItem(e.target.value);
                    }}
                />
                <div className="flex items-center gap-2 w-[200px]">
                    <div id="switch">
                        <Switch
                            checked={onlyFetchXhr}
                            onCheckedChange={(e) => {
                                setOnlyFetchXhr(e);
                            }}
                        />
                    </div>
                    <Label htmlFor="switch">Only Fetch/XHR</Label>
                </div>
            </div>
            <div className="flex mt-5">
                <div className="max-h-[558px] h-[100%] w-[100%] border rounded-tl rounded-bl border-borderBg overflow-y-scroll custom-scrollbar ">
                    <Table>
                        <TableCaption className="mb-4">
                            Refresh the required page to see network calls
                        </TableCaption>
                        <TableHeader>
                            <TableRow className="border-b-background">
                                <TableHead>URL</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {responseList
                                .filter((item: any) =>
                                    item.url.includes(searchItem)
                                )
                                .map((item: any, index) => (
                                    <TableRow key={index}>
                                        <TableCell
                                            className={`font-extralight text-sm cursor-pointer flex gap-2 items-center`}
                                            onClick={() => {
                                                setSelectedItem(item);
                                                setNewMockStarted(false);
                                            }}
                                        >
                                            {item.statusCode == 200 ? (
                                                <>
                                                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full flex-none"></div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="w-[10px] h-[10px] bg-red-500 rounded-full flex-none"></div>
                                                </>
                                            )}
                                            {item.url}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </div>
                <MockScreen
                    selectedItem={selectedItem}
                    newMockStarted={newMockStarted}
                    setNewMockStarted={setNewMockStarted}
                />
            </div>
        </div>
    );
};

export default TableView;
