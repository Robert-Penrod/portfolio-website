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
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "black",
                overflow: "hidden",
                zIndex: "-2",
            }}
        >
            <div
                style={{
                    position: "fixed",
                    minWidth: "105%",
                    minHeight: "105%",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    background: `${Colors.bg3}CC`,
                    zIndex: "-0.5",
                }}
            ></div>
        </div>
    );
};

export default BG;
