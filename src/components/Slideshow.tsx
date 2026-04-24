import React from 'react';

const Slideshow = ({ images }: { images: string[] }) => {
//   console.log(images)
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
	const timer = setInterval(() => {
	  setCurrentIndex((prev) => (prev + 1) % images.length);
	}, 3000);
	return () => clearInterval(timer);
  }, [images.length]);

  return (
	<div className="relative w-full h-[500px] overflow-hidden rounded-lg">
	  {images.map((image, index) => (
		<div
		  key={image}
		  className={`absolute w-full h-full transition-opacity duration-1000 ${
			index === currentIndex ? "opacity-100" : "opacity-0"
		  }`}
		>
		  <img
			src={image}
			alt={`Slide ${index + 1}`}
			className="w-full h-full object-cover"
		  />
		</div>
	  ))}
	</div>
  );
};

export default Slideshow;