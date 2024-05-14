import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    NavLink,
    Col,
    Row,
} from "reactstrap";
import ProjectVisual from "./ProjectVisual";
import { Colors } from "../data/Colors";
import ProjectTag from "./ProjectTag";

const ProjectsDetailsCard = ({ project }) => {
    return (
        <>
            <Card
                inverse
                className='bg-none p-2 mt-3 mx-auto'
                style={{
                    background: Colors.bg1,
                    maxWidth: "750px",
                }}
            >
                <div
                    className='text-end mt-0 me-0'
                    style={{
                        marginBottom: "-0px",
                    }}
                >
                    <NavLink
                        href={`/projects`}
                        style={{ textDecoration: "none", zIndex: -5 }}
                    >
                        <Button
                            close
                            style={{
                                backgroundColor: `${Colors.bgOverlayColor}`,
                                outline: "none",
                            }}
                        />
                    </NavLink>
                </div>
                <ProjectVisual
                    projectData={project}
                    isHeightLimited={true}
                    isMaxHeight={true}
                    maxSize={"350px"}
                />
                <CardBody style={{ color: Colors.txt1 }}>
                    <CardTitle
                        tag='h5'
                        className='fw-bold mb-3 p-2 text-center'
                        style={{
                            backgroundColor: Colors.bg2,
                            borderRadius: "5px",
                        }}
                    >
                        {project.name}
                    </CardTitle>

                    <div>
                        {project.tags.sort().map((tag, idx) => {
                            return <ProjectTag key={idx} text={tag} />;
                        })}
                    </div>
                    <hr />
                    <CardText
                        className='mt-3'
                        style={{
                            fontSize: "18px",
                        }}
                    >
                        {project.description}
                        {project.links && project.links.length > 0 ? (
                            <>
                                <hr />
                                {project.links.map((link, idx) => {
                                    return (
                                        <Row>
                                            <a
                                                key={idx}
                                                href={link.targetLink}
                                                target='_blank'
                                                rel='noreferrer'
                                                style={{
                                                    color: `${Colors.link1}`,
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                {link.anchorText}
                                            </a>
                                            <br />
                                        </Row>
                                    );
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                    </CardText>
                </CardBody>
            </Card>
            <div className='mt-5'></div>
        </>
    );
};

export default ProjectsDetailsCard;
