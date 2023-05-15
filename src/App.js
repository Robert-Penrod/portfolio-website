import React from "react";

import "./App.css";

import Header from "./components/Header";
import ProjectPage from "./pages/ProjectsPage";

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header />
                <ProjectPage />
            </div>
        );
    }
}

export default App;
