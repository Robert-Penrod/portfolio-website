import { LazyVideo } from "react-lazy-media";

const ProjectVisual = ({ projectData, maxSize, isMaxHeight }) => {
    return (
        <div
            className='mx-auto pt-3 ps-3 pe-3'
            style={
                isMaxHeight
                    ? {
                          maxHeight: `${maxSize}`,
                          display: "flex",
                          overflow: "hidden",
                      }
                    : {
                          height: `${maxSize}`,
                          display: "flex",
                          overflow: "hidden",
                      }
            }
        >
            {projectData.video ? (
                // <LazyVideo
                //     loop={true}
                //     autoplay={true}
                //     muted={true}
                //     src={`/videos/${projectData.video}`}
                //     type='video/mp4'
                //     width='auto'
                //     height='100%'
                //     controls={false}
                //     preload={true}
                //     style={{
                //         top: 0,
                //         zIndex: 1,
                //         display: "flex",
                //         justifyContent: "center",
                //         alignItems: "center",
                //         width: "100%",
                //         height: "100%",
                //         overflow: "hidden",
                //     }}
                // />
                <video
                    poster={`/images/${projectData.image}`}
                    className='mx-auto'
                    autoPlay
                    playsInline
                    muted
                    loop
                    preload='auto'
                    src={`/videos/${projectData.video}`}
                    style={{ width: "100%" }}
                    objectFit='contain'
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
    );
};

export default ProjectVisual;
