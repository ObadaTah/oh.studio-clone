import GalleryItem from "./GalleryItem";
import "./Gallery.css";
const galleryItems = [
    {
        title: "Remi",
        subtitle: "Sustainable home improvement",
        imageSrc: "/src/assets/photos/remi-photo.avif",
        mediaType: "image",
        iconSrc: "/src/assets/photos/remi-logo.png",
    },
    {
        title: "Tecton",
        subtitle: "AI data engineering",
        imageSrc: "/src/assets/videos/tecton-video.mp4",
        mediaType: "video",
        iconSrc: "/src/assets/photos/tecton-logo.png",
    },
    {
        title: "Playmind",
        subtitle: "Your gaming AI companion",
        imageSrc: "/src/assets/videos/playmind-video.mp4",
        mediaType: "video",
        iconSrc: "/src/assets/photos/playmind-logo.png",
    },
    {
        title: "Altitude",
        subtitle: "Ecommerce concepts",
        imageSrc: "/src/assets/videos/altitude-video.mp4",
        mediaType: "video",
        iconSrc: "/src/assets/photos/altitude-logo.png",
    },
    {
        title: "Spark",
        subtitle: "Trading platform",
        imageSrc: "/src/assets/photos/spark-photo.avif",
        mediaType: "image",
        iconSrc: "/src/assets/photos/spark-logo.png",
    },
];

const Gallery = () => {
    return (
        <div className="gallery-list">
            {galleryItems.map((item, index) => (
                <GalleryItem
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    imageSrc={item.imageSrc}
                    mediaType={item.mediaType}
                    iconSrc={item.iconSrc}
                />
            ))}
        </div>
    );
};

export default Gallery;
