import iso27001Cert from "@/assets/iso-27001-cert.png";
import aicpaSocCert from "@/assets/aicpa-soc-cert.png";
import csaCert from "@/assets/csa-cert.png";
import cybersecureCanadaCert from "@/assets/cybersecure-canada-cert.png";

const CertificationLogos = () => {
  const logos = [
    {
      src: iso27001Cert,
      alt: "ISO 27001:2013 Certified"
    },
    {
      src: aicpaSocCert, 
      alt: "AICPA SOC Certified"
    },
    {
      src: csaCert,
      alt: "CSA Cloud Security Alliance"
    },
    {
      src: cybersecureCanadaCert,
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
        
        <div className="flex justify-center items-center gap-12 flex-wrap py-4">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center h-24 w-24 p-2 opacity-90 hover:opacity-100 transition-all duration-500"
            >
              <img 
                src={logo.src} 
                alt={logo.alt}
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationLogos;