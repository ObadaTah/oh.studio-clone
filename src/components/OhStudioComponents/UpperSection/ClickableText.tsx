import "./ClickableText.css";
interface ClickableTextProps {
    onClick: () => void;
    text: string;
}

const ClickableText: React.FC<ClickableTextProps> = ({ onClick, text }) => {
    return (
        <div className="clickable-text-container" onClick={onClick}>
            {text}
        </div>
    );
};

export default ClickableText;
