import { Link } from "react-router-dom";
import ColoredSection from "../components/HapticStudioComponents/ColoredSection";
import hapticLogoUrl from "/src/assets/images/haptic-logo.png";
import weirdLogoUrl from "/src/assets/svg/weird-logo.svg";
import anotherWeirdLogoUrl from "/src/assets/svg/another-weird-logo.svg";
import squareLogoUrl from "/src/assets/svg/square-logo.svg";
import logos from "/src/assets/images/logos.png";
import logo1 from "/src/assets/images/logo1.png";
import logo2 from "/src/assets/images/logo2.png";
import logo3 from "/src/assets/images/logo3.png";
import logo4 from "/src/assets/images/logo4.png";
import logo5 from "/src/assets/images/logo5.png";

import "./HapticStudio.css";

const WeirdLogo = (
    <img src={weirdLogoUrl} alt="Logo" style={{ display: "inline-block" }} />
);
const SquareLogo = (
    <img src={squareLogoUrl} alt="Logo" style={{ display: "inline-block" }} />
);
const HapticLogo = <img width="150vw" src={hapticLogoUrl} alt="Haptic" />;

const OrangeSection = (
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
);
const HapticStudio = () => {
    return (
        <>
            <ColoredSection color="#ff4d12">{OrangeSection}</ColoredSection>
            <ColoredSection color="#fbba10">
                {cardContent(
                    "Why Haptic",
                    "Startups come to us when they need a team that can deliver real results.",
                    "black"
                )}
            </ColoredSection>
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
                        {cardHeader(
                            "/src/assets/images/remi-logo.png",
                            "Danny Quick",
                            "Founder, Powerups"
                        )}
                    </div>
                    <div className="col">
                        {cardHeader(
                            "/src/assets/images/remi-logo.png",
                            "Adam Mclntee",
                            "Co-Founder, Apollo"
                        )}
                    </div>
                </div>
            </ColoredSection>
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
            <ColoredSection color="white">
                {cardContent("Partners + Projects", "", "black")}
            </ColoredSection>
            <ColoredSection color="#482f22">
                {cardContent(
                    "Working at Haptic",
                    "Great work starts with great people — join us.",
                    "#ff6937"
                )}
                <br />
                <br />
                <br />
                {cardContent("Open Roles", "", "#ff6937")}
            </ColoredSection>
            <ColoredSection color="white">
                <div
                    className="container footer"
                    style={{ margin: "100px 50px", display: "flex" }}
                >
                    <div className="col">
                        <img width={"200px"} src={anotherWeirdLogoUrl} alt="" />
                    </div>
                    <div className="col">
                        <div className="row">Learn More</div>
                        <div className="row footer-link">
                            <Link className="footer-link" to={""}>
                                Home
                            </Link>
                        </div>
                        <div className="row footer-link">
                            <Link className="footer-link" to={""}>
                                Work
                            </Link>
                        </div>
                        <div className="row footer-link">
                            <Link className="footer-link" to={""}>
                                Pricing
                            </Link>
                        </div>
                        <div className="row footer-link">
                            <Link className="footer-link" to={""}>
                                Careers
                            </Link>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="row">Haptic © 2025</div>
                    </div>
                    <div className="col">
                        <div className="row">Follow Us</div>
                        <div className="row footer-link">
                            <Link className="footer-link" to={""}>
                                Linkedin
                            </Link>
                        </div>
                        <div className="row footer-link">
                            <Link className="footer-link" to={""}>
                                Instagram
                            </Link>
                        </div>
                        <div className="row footer-link">
                            <Link className="footer-link" to={""}>
                                X
                            </Link>
                        </div>
                    </div>
                </div>
            </ColoredSection>
        </>
    );
};
export default HapticStudio;

function cardContent(miniText: string, text: string, textColor: string) {
    return (
        <div>
            <div className="dot" style={{ backgroundColor: textColor }}></div>
            <div className="mini-text" style={{ color: textColor }}>
                {miniText}
            </div>

            <div
                className="bottom-container"
                style={{ marginTop: "200px", color: textColor }}
            >
                {text}
            </div>
        </div>
    );
}

function cardHeader(iconSrc: string, title: string, subtitle: string) {
    return (
        <div className="gallery-header">
            <img src={iconSrc} alt={title} className="gallery-icon" />
            <div className="gallery-text">
                <h4 className="gallery-name">{title}</h4>
                <p className="gallery-subtitle-header">{subtitle}</p>
            </div>
        </div>
    );
}
