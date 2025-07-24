const CertificationLogos = () => {
  const certifications = [
    {
      src: "/lovable-uploads/b2f084c7-fe55-46a0-b73c-59b059dcfb1e.png",
      alt: "ISO 27001:2013 Certified"
    },
    {
      src: "/lovable-uploads/34aeecfb-9ca4-4f38-b093-e110db98fc26.png",
      alt: "AICPA SOC Certified"
    },
    {
      src: "/lovable-uploads/16788097-c39d-4ba3-95e4-38f75df09cde.png",
      alt: "CyberSecure Canada Certified"
    }
  ];

  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Industry Compliant
          </p>
        </div>
        
        <div className="flex justify-center items-center gap-8 py-2">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-500"
            >
              <img 
                src={cert.src} 
                alt={cert.alt}
                className="w-56 h-56 object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationLogos;