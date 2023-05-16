import { Col, Card, CardTitle, CardBody, NavLink } from "reactstrap";
import ProjectTag from "./ProjectTag";
import { Colors } from "../data/Colors";

const ProjectCard = ({ projectData }) => {
    return (
        <Col
            sm='6'
            md='6'
            lg='4'
            xl='3'
            className='p-3 mx-auto'
            style={{ maxWidth: "315px" }}
        >
            <NavLink
                href={`projectDetails/${projectData.name}`}
                style={{ textDecoration: "none" }}
            >
                <Card
                    className=' grow bg-none'
                    style={{
                        background: Colors.bg1,
                        boxShadow: "4px 4px 15px rgba(0,0,0,0.5)",
                    }}
                >
                    <div className='mx-auto p-3'>
                        {projectData.video ? (
                            <video
                                style={{ maxWidth: "100%" }}
                                autoPlay
                                playsInline
                                muted
                                loop
                                src={`/videos/${projectData.video}`}
                            />
                        ) : projectData.image ? (
                            <img
                                style={{ maxWidth: "100%" }}
                                src={`/images/${projectData.image}`}
                                alt='project'
                            />
                        ) : (
                            <div></div>
                        )}
                    </div>

                    <CardBody style={{ color: Colors.txt1 }}>
                        <CardTitle
                            tag='h5'
                            className='fw-bold mb-4 p-2 text-center'
                        >
                            {projectData.name}
                        </CardTitle>

                        <div>
                            {projectData.tags.sort().map((tag, idx) => {
                                return <ProjectTag key={idx} text={tag} />;
                            })}
                        </div>
                    </CardBody>
                </Card>
            </NavLink>
        </Col>
    );
};

export default ProjectCard;
