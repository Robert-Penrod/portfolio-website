import { Badge, Col } from "reactstrap";
import { Colors } from "../data/Colors";

const ProjectTag = ({ text }) => {
    return (
        <Badge
            color='none'
            className='me-2 mb-1 '
            style={{
                fontSize: "0.8rem",
                color: Colors.txt1,
                backgroundColor: Colors.bg3,
            }}
        >
            {text}
        </Badge>
    );
};

export default ProjectTag;
