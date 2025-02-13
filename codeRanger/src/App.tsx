import MockScreen from "./components/screen/mockScreen";
import InitialScreen from "./components/screen/initialScreen";
import Network from "./components/screen/Network";

import {
    MemoryRouter as Router,
    BrowserRouter as Brouter,
    Routes,
    Route,
    // useLocation,
    // useNavigate,
} from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { mode } from "./lib/utils";

const App = () => {
    console.log(mode);
    if (mode == "development") {
        return (
            <>
                <div className="flex justify-center">
                    <Brouter>
                        <Routes>
                            <Route path="/mock" element={<MockScreen />} />
                            <Route path="/" element={<InitialScreen />} />
                            <Route path="/network" element={<Network />} />
                        </Routes>
                    </Brouter>
                </div>
                <Toaster />
            </>
        );
    } else {
        return (
            <>
                <div className="flex justify-center">
                    <Router>
                        <Routes>
                            <Route path="/mock" element={<MockScreen />} />
                            <Route path="/" element={<InitialScreen />} />
                            <Route path="/network" element={<Network />} />
                        </Routes>
                    </Router>
                </div>
                <Toaster />
            </>
        );
    }
};

export default App;
