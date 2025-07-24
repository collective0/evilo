const CertificationLogos = () => {
  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Industry Compliant
          </p>
        </div>
        
        <div className="flex justify-center items-center py-4">
          <div className="flex items-center justify-center p-4 opacity-90 hover:opacity-100 transition-all duration-500">
            <img 
              src="/lovable-uploads/ffbbf017-0cbf-445b-91c9-d8c182c4617a.png" 
              alt="Security Certifications - ISO 27001:2013, AICPA SOC, CSA Cloud Security Alliance, CyberSecure Canada"
              className="max-w-4xl w-full h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationLogos;