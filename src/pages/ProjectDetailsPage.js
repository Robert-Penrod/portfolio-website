import { motion } from "framer-motion";

const ProjecteDetailsPage = () => {
    return (
        <motion.div
            className='my-auto'
            initial={{ opacity: 0, transform: "scale(0.9)" }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            exit={{ opacity: 0, transform: "scale(0.9)" }}
        >
            <div>Project Details</div>
        </motion.div>
    );
};

export default ProjecteDetailsPage;
