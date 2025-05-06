import "./clickableFace.css";
interface ClickableFaceProps {
    onClick: () => void;
    image_path: string;
}

const ClickableFace: React.FC<ClickableFaceProps> = ({
    onClick,
    image_path,
}) => {
    return (
        <div className="clickable-image-container" onClick={onClick}>
            <img
                className="clickable-image-main"
                src={image_path}
                alt="Clickable Face"
            />
        </div>
    );
};

export default ClickableFace;
