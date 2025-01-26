import Navbar from "./components/screen/navbar";
import TableView from "./components/screen/tableView";
const App = () => {
    const sendMessageToBackground = () => {
        chrome.runtime.sendMessage({ action: "getRequests" }, (response) => {
            const requestsDiv = document.getElementById("requests");
            if (requestsDiv)
                requestsDiv.textContent = JSON.stringify(response, null, 2);
        });
    };

    return (
        <div className="flex justify-center ">
            <div className="max-w-4xl w-full flex flex-col justify-center items-center pt-6">
                <Navbar />
                {/* <p className="text-sm font-medium text-left">
                    All Networks Calls
                </p> */}
                <TableView />
            </div>
        </div>
    );
};

export default App;
