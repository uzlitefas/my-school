import GalleryCarousel from "./GalleryImages";
import { GalleryMarquee } from "./GalleryMarquee";
import VideoGallery from "./Galleryvideo";
import RoomsGallery from "./RoomsMarqueeGallery";

function Gallery() {
  return (
    <div>
      <GalleryMarquee/>
      <GalleryCarousel/>
      <RoomsGallery/>
      <VideoGallery/>
    </div>
  );
}

export default Gallery;
