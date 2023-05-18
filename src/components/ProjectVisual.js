import { LazyVideo } from "react-lazy-media";

const ProjectVisual = ({ projectData }) => {
    return (
        <div
            className='mx-auto pt-3 ps-3 pe-3'
            style={{ height: "160px", width: "100%", overflow: "hidden" }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                {projectData.video ? (
                    <>
                        <LazyVideo
                            loop={true}
                            autoplay={true}
                            muted={true}
                            src={`/videos/${projectData.video}`}
                            type='video/mp4'
                            width='100%'
                            height='100%'
                            controls={false}
                            preload={true}
                            style={{
                                top: 0,
                                zIndex: 1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                            }}
                        />
                        {/* <video
                            muted
                            autoPlay
                            style={{
                                top: 0,
                                zIndex: 1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                            }}
                            src={`/videos/${projectData.video}`}
                        /> */}
                    </>
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
        </div>
    );
};

export default ProjectVisual;
