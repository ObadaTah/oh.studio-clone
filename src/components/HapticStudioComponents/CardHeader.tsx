interface CardHeaderProps {
    iconSrc: string;
    title: string;
    subtitle: string;
}
const cardHeader: React.FC<CardHeaderProps> = ({
    iconSrc,
    title,
    subtitle,
}) => {
    return (
        <div className="gallery-header">
            <img src={iconSrc} alt={title} className="gallery-icon" />
            <div className="gallery-text">
                <h4 className="gallery-name">{title}</h4>
                <p className="gallery-subtitle-header">{subtitle}</p>
            </div>
        </div>
    );
};
export default cardHeader;
