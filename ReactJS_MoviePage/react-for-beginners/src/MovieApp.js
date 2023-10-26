import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import "./App.module.css";
import Navigation from "./components/Navigation";

function App() {
    return (
        <Router>
            <Navigation />
            <br/>
            <br/>
            <br/>
            <Routes>
                <Route path="/about-us" element={<h1>Hello</h1>} />
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;