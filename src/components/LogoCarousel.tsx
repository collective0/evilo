const LogoCarousel = () => {
  const logos = [
    {
      src: "/lovable-uploads/6334c7cc-e4d1-427e-bffb-9694248e985a.png",
      alt: "ZIN"
    },
    {
      src: "/lovable-uploads/a2bf6b94-c2bc-47c8-ad9a-a1fa4a0aecd9.png",
      alt: "LABDAKO events"
    },
    {
      src: "/lovable-uploads/3e2ed7a1-dbf7-455a-95f0-52fc02e29898.png",
      alt: "hebe concept"
    },
    {
      src: "/lovable-uploads/3cbf24cd-f591-4f90-aeac-0b58c492e1af.png",
      alt: "STIRNU BUKS"
    },
    {
      src: "/lovable-uploads/ddce899a-2380-4eec-ab42-43b6102cb983.png",
      alt: "BOSCH Service"
    },
    {
      src: "/lovable-uploads/876d0c99-ab67-4d32-b385-cff4a2c7f672.png",
      alt: "TOPAZOS"
    }
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 relative z-10 overflow-hidden">
      <div className="relative">
        {/* Fading edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        {/* Infinite scrolling container */}
        <div 
          className="flex w-fit"
          style={{
            animation: 'infiniteScroll 30s linear infinite'
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center mx-8 min-w-[120px] h-16 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={logo.src} 
                alt={logo.alt}
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