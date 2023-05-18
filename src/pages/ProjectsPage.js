import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import ProjectDataList from "../data/projectData.json";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
    return (
        <motion.div
            className='my-auto'
            initial={{
                opacity: 0,
                transformOrigin: "50% 0px",
                transform: "scale(0.9)",
            }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            exit={{ opacity: 0, transform: "scale(0.9)" }}
        >
            <Container className='mt-2'>
                <Row>
                    {ProjectDataList.sort((a, b) => {
                        let order = 0;
                        if (a.favorite === "true") {
                            order -= 2;
                        }
                        if (b.favorite === "true") {
                            order += 2;
                        }
                        if (a.year > b.year) {
                            order -= 1;
                        } else {
                            order += 1;
                        }
                        return order;
                    }).map((projectData, idx) => {
                        return (
                            <ProjectCard key={idx} projectData={projectData} />
                        );
                    })}
                </Row>
                <br />
            </Container>
        </motion.div>
    );
};

export default ProjectsPage;
