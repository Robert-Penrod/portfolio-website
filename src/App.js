import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import BG from "./components/BG";

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header />
                <BG />
                <BrowserRouter>
                    <div className='content'>
                        <AnimatedRoutes />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
