import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import { Colors } from "../data/Colors";

const HomePage = () => {
    return (
        <motion.div
            className='my-auto'
            initial={{ opacity: 0, transform: "scale(0.9)" }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            exit={{ opacity: 0, transform: "scale(0.9)" }}
        >
            <Container style={{ textAlign: "center" }}>
                <Col>
                    <img
                        src='/images/avatar1.jpg'
                        //src='/images/ai portrait 1.png'
                        className='rounded-circle shadow mb-3 mt-3'
                        style={{
                            width: "75%",
                            maxWidth: "250px",
                            outline: `4px solid ${Colors.txt1}`,
                        }}
                        alt='Avatar'
                    />
                </Col>
                <Col className='mb-4' style={{ color: Colors.txt1 }}>
                    <hr />
                    <Col className='fs-1 fw-bold'>Hi, I'm Robert.</Col>
                    <Col className='fs-5 fw-normal fst-italic'>
                        I aim to grow my knowledge, experience, and capabilities
                        to develop and create things that add value to the lives
                        of others.
                    </Col>
                    <hr />
                </Col>
            </Container>
        </motion.div>
    );
};

export default HomePage;
