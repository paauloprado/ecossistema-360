import Slideshow from "../components/Slideshow";

const SlideshowPage = ({
  title,
  images,
}: {
  title: string;
  images: string[];
}) => (
  <div className="min-h-screen bg-gray-900 p-8">
	<h1 className="text-4xl font-bold text-white mb-8 text-center">{title}</h1>
	<Slideshow images={images} />
  </div>
);

export default SlideshowPage;