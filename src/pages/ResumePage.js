import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { Colors } from "../data/Colors";

import Resume from "../documents/Resume.pdf";

const ResumePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, transform: "scale(0.9)" }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            exit={{ opacity: 0, transform: "scale(0.9)" }}
        >
            <iframe
                src={Resume}
                frameborder='0'
                height='100%'
                width='500px'
                style={{ margin: "0px" }}
            ></iframe>
        </motion.div>
    );
};

export default ResumePage;
