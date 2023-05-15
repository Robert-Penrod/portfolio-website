import { Container, Row, Col } from "reactstrap";
import ProjectDataList from "../data/projectData.json";
import ProjectCard from "../components/ProjectCard";

const ProjectPage = () => {
    return (
        <>
            <Container>
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
                    return <ProjectCard key={idx} projectData={projectData} />;
                })}
            </Container>
        </>
    );
};

export default ProjectPage;
