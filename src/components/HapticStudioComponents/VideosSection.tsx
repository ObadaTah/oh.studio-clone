import CardHeader from "./CardHeader";
import ColoredSection from "./ColoredSection";

const VideosSection = () => {
    return (
        <ColoredSection color="white">
            <div
                className="container"
                style={{
                    width: "100%",
                    display: "flex",
                    gap: "50px",
                    justifyContent: "space-between",
                    marginTop: "100px",
                    marginBottom: "100px",
                }}
            >
                <div className="col">
                    <CardHeader
                        iconSrc="/src/assets/images/remi-logo.png"
                        title="Danny Quick"
                        subtitle="Founder, Powerups"
                    />
                </div>
                <div className="col">
                    <CardHeader
                        iconSrc="/src/assets/images/remi-logo.png"
                        title="Adam Mclntee"
                        subtitle="Co-Founder, Apollo"
                    />
                </div>
            </div>
        </ColoredSection>
    );
};
export default VideosSection;
