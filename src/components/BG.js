import { Colors } from "../data/Colors";
import bgImage from "../images/bg2.jpg";

const BG = () => {
    return (
        <div
            className='blur-bg'
            style={{
                position: "fixed",
                minWidth: "101%",
                minHeight: "101%",
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "black",
                zIndex: "-2",
            }}
        >
            <div
                style={{
                    position: "fixed",
                    minWidth: "105%",
                    minHeight: "105%",
                    background: `${Colors.bg3}CC`,
                    zIndex: "-0.5",
                }}
            ></div>
        </div>
    );
};

export default BG;
