import ClickableFace from "./ClickableFace";
import ClickableText from "./ClickableText";
import HapticSVG from "./HapticSVG";
import imageUrl from "/src/assets/images/nice-photo.jpg";
import "./UpperSection.css";
import { Link } from "react-router-dom";
const UpperSection = () => {
    return (
        <div className="main-container">
            <p className="main-paragraph">
                A
                <ClickableFace onClick={() => {}} image_path={imageUrl} />
                designer working with startups globally. Currently steering the
                ship at
                <HapticSVG />
                <Link to="/haptic">
                    <ClickableText text="Haptic." onClick={() => {}} />
                </Link>
            </p>
        </div>
    );
};
export default UpperSection;
