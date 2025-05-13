import ColoredSection from "./ColoredSection";
import logos from "/src/assets/images/logos.png";

const CompaniesSection = () => {
    return (
        <ColoredSection color="white">
            <div
                className="container"
                style={{
                    marginTop: "100px",
                    marginBottom: "100px",
                    marginLeft: "10px",
                }}
            >
                <img src={logos} alt="" />
            </div>
        </ColoredSection>
    );
};

export default CompaniesSection;
