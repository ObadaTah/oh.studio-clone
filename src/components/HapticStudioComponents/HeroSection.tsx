import hapticLogoUrl from "/src/assets/images/haptic-logo.png";
import weirdLogoUrl from "/src/assets/svg/weird-logo.svg";
import squareLogoUrl from "/src/assets/svg/square-logo.svg";
import { Link } from "react-router-dom";
import ColoredSection from "./ColoredSection";

const WeirdLogo = (
    <img src={weirdLogoUrl} alt="Logo" style={{ display: "inline-block" }} />
);
const SquareLogo = (
    <img src={squareLogoUrl} alt="Logo" style={{ display: "inline-block" }} />
);
const HapticLogo = <img width="150vw" src={hapticLogoUrl} alt="Haptic" />;

const HeroSection = () => {
    return (
        <ColoredSection color="#ff4d12">
            <div className="container" style={{ margin: "0px" }}>
                <div className="row" style={{ marginBottom: "200px" }}>
                    <div className="col">
                        <Link to="/haptic">{HapticLogo}</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="bottom-container">
                        We help {WeirdLogo}
                        ambitious teams turn bold visions into {SquareLogo}
                        lasting impact.
                    </div>
                </div>
            </div>
        </ColoredSection>
    );
};

export default HeroSection;
