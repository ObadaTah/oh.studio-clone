interface ColoredSectionProps {
    color: string;
    children?: React.ReactNode;
}

const ColoredSection: React.FC<ColoredSectionProps> = ({ color, children }) => {
    return (
        <div
            className={`bg-${color}-500`}
            style={{
                margin: "0",
                padding: "20px",
                backgroundColor: color,
            }}
        >
            {children}
        </div>
    );
};
export default ColoredSection;
