import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const Navbar = () => {
    return (
        <div className="w-full border-b-1 flex pb-2 justify-between">
            <div className="flex gap-5">
                <h3 className="font-bold text-xl">mockBird</h3>
                {/* <div className="cursor-pointer">
                    {" "}
                    <History size={"20"} color="yellow" />
                </div>

                <div>
                    <ScanEye size={"20"} />
                </div>

                <div>
                    <MessageCircle size={"20"} />
                </div> */}
            </div>
            <Button
                size={"xsm"}
                onClick={() => {
                    document.dispatchEvent(
                        new CustomEvent("newMock", { detail: null })
                    );
                }}
            >
                {" "}
                <Plus />
                Mock New Request
            </Button>
        </div>
    );
};

export default Navbar;
