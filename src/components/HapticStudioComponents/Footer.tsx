import { Link } from "react-router-dom";
import ColoredSection from "./ColoredSection";
import anotherWeirdLogoUrl from "/src/assets/svg/another-weird-logo.svg";

const Footer = () => {
    return (
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
                    <div style={{ marginTop: "100px" }} />
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
    );
};

export default Footer;
