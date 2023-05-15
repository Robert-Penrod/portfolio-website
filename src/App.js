import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ProjecteDetailsPage from "./pages/ProjectDetailsPage";

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header />
                <BrowserRouter>
                    <div className='content'>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route
                                path='/projects'
                                element={<ProjectsPage />}
                            />
                            <Route
                                path='/projectDetails/:projectName'
                                element={<ProjecteDetailsPage />}
                            />
                            <Route path='/contact' element={<ContactPage />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
