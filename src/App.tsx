import "./App.css";
import ClickableFace from "./components/ClickableFace";
import ClickableText from "./components/ClickableText";
import HapticSVG from "./components/HapticSVG";
import imageUrl from "./assets/nice-photo.jpg";
function App() {
    return (
        <>
            <div className="main-container">
                <p className="main-paragraph">
                    A
                    <ClickableFace onClick={() => {}} image_path={imageUrl} />
                    designer working with startups globally. Currently steering
                    The Ship
                    <HapticSVG />
                    <ClickableText text="Haptic." onClick={() => {}} />
                </p>
            </div>
        </>
    );
}

export default App;
