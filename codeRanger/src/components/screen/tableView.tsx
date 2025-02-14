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
import { mode } from "@/lib/utils";

const TableView = () => {
    const [responseList, setResponseList] = useState<any[]>([]);
    const [searchItem, setSearchItem] = useState("");
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
        if (mode == "development") {
            setResponseList([
                { id: 1, name: "Google", url: "https://www.google.com" },
                { id: 2, name: "GitHub", url: "https://www.github.com" },
                {
                    id: 3,
                    name: "Stack Overflow",
                    url: "https://stackoverflow.com",
                },
                {
                    id: 4,
                    name: "Mozilla",
                    url: "https://developer.mozilla.org",
                },
                {
                    id: 5,
                    name: "Reddit",
                    url: "https://www.reddit.com",
                    mocked: true,
                },
                { id: 6, name: "YouTube", url: "https://www.youtube.com" },
                { id: 7, name: "Twitter", url: "https://twitter.com" },
                { id: 8, name: "LinkedIn", url: "https://www.linkedin.com" },
                { id: 9, name: "Amazon", url: "https://www.amazon.com" },
                { id: 10, name: "Netflix", url: "https://www.netflix.com" },
                { id: 11, name: "Wikipedia", url: "https://www.wikipedia.org" },
                { id: 12, name: "OpenAI", url: "https://openai.com" },
            ]);
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
                                .map((item: any) => (
                                    <TableRow key={item.url}>
                                        <TableCell
                                            className={
                                                item?.mocked
                                                    ? `font-medium text-primary`
                                                    : `font-medium text-green-500`
                                            }
                                        >
                                            {item.url?.slice(0, 70)}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </div>
                <MockScreen />
            </div>
        </div>
    );
};

export default TableView;
