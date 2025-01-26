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
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import { Button } from "../ui/button";
const TableView = () => {
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
                    <TableRow>
                        <TableCell className="font-medium text-green-500">
                            200 OK
                        </TableCell>
                        <TableCell>GET</TableCell>
                        <TableCell>
                            https://google.com/cdn/2002/2334ndsuyfh&65gsdu
                        </TableCell>
                        <TableCell className="flex justify-end">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Waypoints size={"20"} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Mock</DropdownMenuItem>
                                    <DropdownMenuItem>Share</DropdownMenuItem>

                                    <DropdownMenuItem>
                                        Mark As Important
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-green-500">
                            200 OK
                        </TableCell>
                        <TableCell>GET</TableCell>
                        <TableCell>
                            https://google.com/cdn/2002/2334ndsuyfh&65gsdu
                        </TableCell>
                        <TableCell className="flex justify-end">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Waypoints size={"20"} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Mock</DropdownMenuItem>
                                    <DropdownMenuItem>Share</DropdownMenuItem>

                                    <DropdownMenuItem>
                                        Mark As Important
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-green-500">
                            200 OK
                        </TableCell>
                        <TableCell>GET</TableCell>
                        <TableCell>
                            https://google.com/cdn/2002/2334ndsuyfh&65gsdu
                        </TableCell>
                        <TableCell className="flex justify-end">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Waypoints size={"20"} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Mock</DropdownMenuItem>
                                    <DropdownMenuItem>Share</DropdownMenuItem>

                                    <DropdownMenuItem>
                                        Mark As Important
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-green-500">
                            200 OK
                        </TableCell>
                        <TableCell>GET</TableCell>
                        <TableCell>
                            https://google.com/cdn/2002/2334ndsuyfh&65gsdu
                        </TableCell>
                        <TableCell className="flex justify-end">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Waypoints size={"20"} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Mock</DropdownMenuItem>
                                    <DropdownMenuItem>Share</DropdownMenuItem>

                                    <DropdownMenuItem>
                                        Mark As Important
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default TableView;
