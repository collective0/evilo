const CompanyCarousel = () => {
  const companies = [
    {
      src: "/lovable-uploads/a8d7ffce-14fb-4595-85fd-9676dc9b03e2.png",
      alt: "TOPAZOS"
    },
    {
      src: "/lovable-uploads/03497106-b6f3-469d-bf04-c4f7e06fc332.png",
      alt: "BOSCH Service"
    },
    {
      src: "/lovable-uploads/9f514dda-9ef2-4945-b444-39c4454a77ee.png",
      alt: "hebe concept"
    },
    {
      src: "/lovable-uploads/45306982-0f96-470e-8283-80b8c5b4b61c.png",
      alt: "LABDAKO events"
    }
  ];

  // Duplicate companies multiple times for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="py-16 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-400 text-lg">
            Companies we've proudly served with our AI solutions
          </p>
        </div>
      </div>
      
      <div className="relative">
        {/* Fading edges */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
        
        {/* Infinite scrolling container */}
        <div 
          className="flex w-fit gap-16"
          style={{
            animation: 'companyScroll 40s linear infinite'
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div 
              key={index}
              className="flex items-center justify-center min-w-[180px] h-20 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={company.src} 
                alt={company.alt}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyCarousel;