const CertificationLogos = () => {
  const certifications = [
    {
      src: "/lovable-uploads/6261d697-1106-45c1-956b-6bd8d2ed72e3.png",
      alt: "ISO 27001:2013 Certified"
    },
    {
      src: "/lovable-uploads/fbff4337-659f-4af2-bdd0-409fddd155fb.png",
      alt: "AICPA SOC Certified"
    },
    {
      src: "/lovable-uploads/4bdb1727-6f06-44ac-aa5c-323de9d425c0.png",
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