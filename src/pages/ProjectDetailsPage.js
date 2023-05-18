import { useParams } from "react-router-dom";
import projectDataList from "../data/projectData.json";
import { Container, Col, Row } from "reactstrap";
import ProjectsDetailsCard from "../components/ProjectDetailsCard";
import { motion } from "framer-motion";

const ProjectsDetailsPage = () => {
    const { projectName } = useParams();
    const project = projectDataList.find(
        (project) => project.name === projectName
    );

    return (
        <motion.div
            initial={{ opacity: 0, transform: "scale(1)" }}
            animate={{ opacity: 1, transform: "scale(0.95)" }}
            exit={{ opacity: 0, transform: "scale(1)" }}
        >
            {/* <ScrollToTop /> */}
            <Container>
                <Row>
                    <Col>
                        <ProjectsDetailsCard project={project} />
                    </Col>
                </Row>
            </Container>
            <div className='mt-5'></div>
        </motion.div>
    );
};
export default ProjectsDetailsPage;
