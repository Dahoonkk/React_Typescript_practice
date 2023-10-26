import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import "./App.module.css";
import Detail from './routes/Detail';

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Routes>
                <Route path="/" exact={true} component={<Home />} />
                <Route path="/about" component={<Detail />} />
            </Routes>
        </HashRouter>
    );
}

export default App;