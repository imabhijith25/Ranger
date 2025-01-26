import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Waypoints } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
const TableView = () => {
    const [responseList, setResponseList] = useState<any[]>([]);
    useEffect(() => {
        chrome.runtime.onMessage.addListener((message) => {
            if (message.action == "incomingRequest") {
                setResponseList([...message.detail]);
            }
        });
    }, []);

    return (
        <div className="mt-8 w-full">
            <Input placeholder="Search for network calls" />

            <Table className="mt-4">
                <TableCaption>All Network Calls</TableCaption>
                <TableHeader>
                    <TableRow className="border-b-background">
                        <TableHead className="w-[100px]">Method</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>URL</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {responseList.reverse().map((item: any) => (
                        <TableRow>
                            <TableCell className="font-medium text-green-500">
                                {item.statusCode}
                            </TableCell>
                            <TableCell>{item?.method}</TableCell>
                            <TableCell>{item.url?.slice(0, 70)}..</TableCell>
                            <TableCell className="flex justify-end">
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Waypoints size={"20"} />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            Mock
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Share
                                        </DropdownMenuItem>

                                        <DropdownMenuItem>
                                            Mark As Important
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TableView;
