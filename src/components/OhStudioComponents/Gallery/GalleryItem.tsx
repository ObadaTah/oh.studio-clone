import React from "react";
import "./GalleryItem.css";
interface GalleryItemProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    mediaType: string;
    iconSrc: string;
}
const GalleryItem: React.FC<GalleryItemProps> = ({
    title,
    subtitle,
    imageSrc,
    mediaType,
    iconSrc,
}) => {
    return (
        <div className="gallery-card">
            {cardHeader(iconSrc, title, subtitle)}
            <div className="gallery-item">
                {mediaType === "video" ? (
                    <video
                        className="gallery-video"
                        src={imageSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                ) : (
                    <img src={imageSrc} alt={title} className="gallery-image" />
                )}
            </div>
        </div>
    );
};

export default GalleryItem;
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
