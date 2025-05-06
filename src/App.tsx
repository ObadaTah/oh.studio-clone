import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OhStudio from "./pages/OhStudio";
import HapticStudio from "./pages/HapticStudio";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<OhStudio />} />
                    <Route path="haptic" element={<HapticStudio />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
