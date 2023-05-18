import { Container, Card, CardBody, Col, Row } from "reactstrap";
import { Colors } from "../data/Colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <motion.div
            className='my-auto'
            initial={{ opacity: 0, transform: "scale(0.9)" }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            exit={{ opacity: 0, transform: "scale(0.9)" }}
            style={{ width: "100%" }}
        >
            <Container style={{ color: Colors.txt1 }}>
                <Row>
                    <Col xs='12' sm='8' md='6' lg='4' className='mx-auto'>
                        <Card
                            className='bg-none p-0'
                            style={{
                                background: Colors.bg1,
                                boxShadow: "4px 4px 15px rgba(0,0,0,0.5)",
                                wordWrap: "normal",
                                minWidth: "100%",
                            }}
                        >
                            <CardBody>
                                <a
                                    href='https://github.com/Robert-Penrod'
                                    rel='noreferrer'
                                    target='_blank'
                                    style={{
                                        textDecoration: "none",
                                        color: Colors.link1,
                                    }}
                                >
                                    <Row className='p-1'>
                                        <Col xs='2'>
                                            <FontAwesomeIcon
                                                className='fa-lg'
                                                icon={faGithub}
                                            />
                                        </Col>
                                        <Col>Github</Col>
                                    </Row>
                                </a>
                                <hr />
                                <a
                                    href='https://www.linkedin.com/in/robert-penrod/'
                                    rel='noreferrer'
                                    target='_blank'
                                    style={{
                                        textDecoration: "none",
                                        color: Colors.link1,
                                    }}
                                >
                                    <Row className='p-1'>
                                        <Col xs='2'>
                                            <FontAwesomeIcon
                                                className='fa-lg'
                                                icon={faLinkedin}
                                            />
                                        </Col>
                                        <Col>LinkedIn</Col>
                                    </Row>
                                </a>
                                <hr />
                                <div>
                                    <Row className='p-1'>
                                        <Col xs='2'>
                                            <a
                                                href='mailto: robertpenrod42@gmail.com'
                                                rel='noreferrer'
                                                target='_blank'
                                                style={{
                                                    textDecoration: "none",
                                                    color: Colors.link1,
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    className='fa-lg'
                                                    icon={faEnvelope}
                                                />
                                            </a>
                                        </Col>
                                        <Col xs='10'>
                                            robertpenrod42@gmail.com
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default ContactPage;
