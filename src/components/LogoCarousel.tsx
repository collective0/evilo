import { useEffect, useRef } from "react";

const LogoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/ISO_27001_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/SOC_2_Type_II_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/17/ISO_9001_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/GDPR_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/69/HIPAA_logo.svg"
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
            Industry Compliant
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