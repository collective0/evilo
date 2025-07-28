
import { CheckCircle, Users, Award, Lightbulb } from "lucide-react";
import InteractiveVisual from "./InteractiveVisual";

const About = () => {
  const achievements = [
    "Affordable and Flexible Pricing",
    "95% Client Satisfaction Rate", 
    "24/7 Dedicated Support",
    "Industry-Leading Expertise"
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leading the <span className="bg-gradient-to-r from-blue-600 to-slate-500 bg-clip-text text-transparent">AI Revolution</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              At Evilo, we're not just implementing AI solutions – we're reshaping the future of business automation.
              Our cutting-edge technologies and expert team deliver transformative results that drive real growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3 bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-blue-800/20">
                <Users className="text-blue-400 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-white font-semibold">Expert Team</h3>
                  <p className="text-gray-400 text-sm">AI specialists & engineers</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-600/20">
                <Award className="text-slate-400 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-white font-semibold">Proven Results</h3>
                  <p className="text-gray-400 text-sm">Measurable ROI & growth</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-blue-800/20">
                <Lightbulb className="text-blue-400 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-white font-semibold">Innovation</h3>
                  <p className="text-gray-400 text-sm">Cutting-edge solutions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-600/20">
                <CheckCircle className="text-slate-400 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-white font-semibold">Quality</h3>
                  <p className="text-gray-400 text-sm">Enterprise-grade reliability</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-blue-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Visual */}
          <div className="flex justify-center items-center">
            <InteractiveVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
