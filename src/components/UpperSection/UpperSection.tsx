import ClickableFace from "./ClickableFace";
import ClickableText from "./ClickableText";
import HapticSVG from "./HapticSVG";
import imageUrl from "../../assets/photos/nice-photo.jpg";
import "./UpperSection.css";
const UpperSection = () => {
    return (
        <div className="main-container">
            <p className="main-paragraph">
                A
                <ClickableFace onClick={() => {}} image_path={imageUrl} />
                designer working with startups globally. Currently steering the
                ship at
                <HapticSVG />
                <ClickableText text="Haptic." onClick={() => {}} />
            </p>
        </div>
    );
};
export default UpperSection;
