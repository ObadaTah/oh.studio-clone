interface CardContentProps {
    miniText: string;
    text: string;
    textColor: string;
}

const CardContent: React.FC<CardContentProps> = (
    { miniText, text, textColor } // Destructure props
) => {
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
};
export default CardContent;
