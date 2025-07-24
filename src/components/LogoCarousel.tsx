import { useEffect, useRef } from "react";

const LogoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const logos = [
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&auto=format", 
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=120&h=60&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=120&h=60&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=120&h=60&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=120&h=60&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=120&h=60&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=120&h=60&fit=crop&auto=format"
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one set of logos
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-12 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-hidden space-x-12 items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-16 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={logo} 
                alt={`Partner logo ${(index % logos.length) + 1}`}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;