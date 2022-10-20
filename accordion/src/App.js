import "./App.css";
import { Accordion } from "./components/Accordion";
import { TabHeaders } from "./components/TabHeaders";
import { Tabs } from "./components/Tabs";
import { VerticalTabs } from "./components/VerticalTabs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RespNav } from "./components/RespNav";

function App() {
    return (
        <div className="App">
            <Router>
                <Tabs />
                <Routes>
                    <Route path="/" element={<TabHeaders />} />
                    <Route path="/accordion" element={<Accordion />} />
                    <Route path="/vertical-tab" element={<VerticalTabs />} />
                    <Route path="/resp" element={<RespNav />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
