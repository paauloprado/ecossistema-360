import GalleryItem from './GalleryItem';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

interface GallerySectionProps {
  media: MediaItem[];
}

const GallerySection = ({ media }: GallerySectionProps) => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {media.map((item, index) => (
          <GalleryItem key={index} type={item.type} src={item.src} alt={item.alt} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
