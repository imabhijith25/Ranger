import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Navbar from "./navbar";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const MockScreen = () => {
    const [mockData, setMockData] = useState({
        statusCode: 200,
        url: "",
        method: "GET",
        payloadJson: "",
    });

    const submitMock = () => {
        chrome.runtime.sendMessage({
            action: "save_mock",
            data: [mockData],
        });
    };

    return (
        <>
            <div className="max-w-4xl w-full flex flex-col justify-center items-center pt-6">
                <Navbar />

                <div className="w-full mt-9">
                    <p className="font-extrabold mb-4 text-center">
                        Mock A Response
                    </p>
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
                                        statusCode: Number(e.target.value),
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
                                        setMockData({ ...mockData, method: e });
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
                        <Label>JSON Response</Label>
                        <div className="bg-inputBg pt-5 pb-5">
                            <CodeMirror
                                value={mockData.payloadJson}
                                height="200px"
                                extensions={[json()]}
                                onChange={(val) => {
                                    setMockData({
                                        ...mockData,
                                        payloadJson: val,
                                    });
                                }}
                            />
                            ;
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button
                            className="mt-3 "
                            onClick={() => {
                                console.log(JSON.parse(mockData.payloadJson));
                                submitMock();
                            }}
                        >
                            Create Mock
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MockScreen;
