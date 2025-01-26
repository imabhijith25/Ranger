import { Button } from "../ui/button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InitialScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const start = urlParams.get("start");
        console.log(start);
        console.log("usee effect ran");
        if (start) {
            navigate("/network");
        }
    }, []);
    return (
        <>
            <div className="h-svh flex items-center flex-col justify-center min-w-[300px] min-h-[500px]">
                <p className="text-xl">
                    Mock Network Calls and Share Responses Securely
                </p>

                <Button
                    size={"sm"}
                    className="mt-2"
                    onClick={() => {
                        chrome.runtime.sendMessage({
                            action: "Launch_network",
                        });
                    }}
                >
                    Launch Ranger For This Website
                </Button>
            </div>
        </>
    );
};

export default InitialScreen;
