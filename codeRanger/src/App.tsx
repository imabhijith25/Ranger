import InitialScreen from "./components/screen/initialScreen";

import Network from "./components/screen/Network";

import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
    // useEffect(() => {
    //     chrome.runtime.sendMessage({ action: "openInNewTab" });
    // }, []);
    return (
        <div className="flex justify-center ">
            <Router>
                <Routes>
                    <Route path="/" element={<InitialScreen />} />
                    <Route path="/network" element={<Network />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
