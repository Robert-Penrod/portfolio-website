import { Container, Row, Col, Card, CardTitle, CardBody } from "reactstrap";

const ProjectCard = ({ projectData }) => {
    return (
        <>
            <Card className='m-5'>
                <div className='mx-auto p-3'>
                    {projectData.video ? (
                        <video
                            style={{ maxWidth: "100%" }}
                            autoPlay
                            playsInline
                            muted
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

                <CardBody>
                    <CardTitle>{projectData.name}</CardTitle>
                </CardBody>
            </Card>
        </>
    );
};

export default ProjectCard;
