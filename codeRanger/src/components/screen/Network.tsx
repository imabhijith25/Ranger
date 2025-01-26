import Navbar from "./navbar";
import TableView from "./tableView";

const Network = () => {
    return (
        <>
            <div className="max-w-4xl w-full flex flex-col justify-center items-center pt-6">
                <Navbar />
                {/* <p className="text-sm font-medium text-left">
                All Networks Calls
            </p> */}
                <TableView />
            </div>
        </>
    );
};

export default Network;
