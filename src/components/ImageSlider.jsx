import { useState, useEffect } from 'react';

const images = [
  {
    src: '/assets/5991-morning-forest-nature-4k-ultra-hd-wallpaper-high-quality-walls.webp',
    title: 'Forest AI',
    badge: 'Discover the secrets of the forest with our AI-powered insights'
  },
  {
    src: '/assets/31206.webp',
    title: 'Nature AI',
    badge: 'Explore and Increase your knowledge of nature without wondering in the woods'
  },
  {
    src: '/assets/3881016.webp',
    title: 'Marine AI',
    badge: 'Wanna know more But can\'t dive ? we got you'
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative h-96 overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900 to-black">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay with title and badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                      {image.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
