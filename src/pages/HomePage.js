import { Container, Row, Col } from "reactstrap";
import { Colors } from "../data/Colors";

const HomePage = () => {
    return (
        <div className='my-auto'>
            <Container style={{ textAlign: "center" }}>
                <Col>
                    <img
                        src='/images/avatar1.jpg'
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
        </div>
    );
};

export default HomePage;
