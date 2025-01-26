import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const InitialScreen = () => {
    return (
        <>
            <div className="h-svh flex items-center flex-col justify-center">
                <p>Mock Network Calls and Share Responses Securely</p>

                <Button
                    className="mt-2"
                    onClick={() => {
                        chrome.runtime.sendMessage({
                            action: "Launch_network",
                        });
                    }}
                >
                    Launch Ranger For This Website
                </Button>
                <Link to="/network">Get started</Link>
            </div>
        </>
    );
};

export default InitialScreen;
