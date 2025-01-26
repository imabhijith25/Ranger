import InitialScreen from "./components/screen/initialScreen";

import Network from "./components/screen/Network";

import {
    MemoryRouter as Router,
    Routes,
    Route,
    // useLocation,
    // useNavigate,
} from "react-router-dom";
const App = () => {
    return (
        <div className="flex justify-center">
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
