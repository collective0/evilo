const CertificationLogos = () => {
  const logos = [
    {
      src: "/lovable-uploads/12ddd077-24cf-4fd6-a615-5416b102f3db.png",
      alt: "ISO 27001:2013 Certified"
    },
    {
      src: "/lovable-uploads/284fd4d3-9fa0-468c-8039-48cf1b139037.png", 
      alt: "AICPA SOC Certified"
    },
    {
      src: "/lovable-uploads/05bf9a3a-5d15-4370-af0f-5a9a0654f343.png",
      alt: "CSA Cloud Security Alliance"
    },
    {
      src: "/lovable-uploads/5cba604a-9ad9-4932-830a-d64e4f0ec3b5.png",
      alt: "CyberSecure Canada Certified"
    }
  ];

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Industry Compliant
          </p>
        </div>
        
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center h-32 w-32 opacity-90 hover:opacity-100 transition-all duration-500"
            >
              <img 
                src={logo.src} 
                alt={logo.alt}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationLogos;