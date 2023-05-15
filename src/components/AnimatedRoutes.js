import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";
import ProjecteDetailsPage from "../pages/ProjectDetailsPage";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes
                location={location}
                key={location.pathname}
                className='routes'
            >
                <Route path='/' element={<HomePage />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route
                    path='/projectDetails/:projectName'
                    element={<ProjecteDetailsPage />}
                />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
