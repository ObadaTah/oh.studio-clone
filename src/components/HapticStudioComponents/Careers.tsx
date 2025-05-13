import CardContent from "./CardContent";
import ColoredSection from "./ColoredSection";

const Careers = () => {
    return (
        <ColoredSection color="#482f22">
            <CardContent
                miniText="Working at Haptic"
                text="Great work starts with great people — join us."
                textColor="#ff6937"
            />
            <div style={{ marginTop: "200px" }} />
            <CardContent
                miniText="Open Roles"
                text="Software Engineering"
                textColor="#ff6937"
            />
        </ColoredSection>
    );
};

export default Careers;
