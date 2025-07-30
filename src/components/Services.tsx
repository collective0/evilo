
import { Settings, Code, Zap, Sparkles, Send } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Services = () => {

  const services = [
    {
      icon: Settings,
      title: "Optimisation",
      description: "We optimize workflows by connecting systems, automating tasks, and minimizing wasted time.",
      visual: (
        <div className="relative w-full h-32 bg-slate-900/50 rounded-lg p-4 mb-4 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Sparkles className="text-blue-400 animate-pulse" size={28} />
              <div className="absolute -inset-4 border border-blue-400/30 rounded-full animate-ping"></div>
            </div>
          </div>
          <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded opacity-60 animate-pulse"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-slate-400 rounded opacity-40 animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-2 w-2 h-2 bg-blue-300 rounded opacity-50 animate-pulse delay-1000"></div>
        </div>
      )
    },
    {
      icon: Code,
      title: "Custom Projects",
      description: "We analyze your workflows and implement AI solutions to streamline and optimize them.",
      visual: (
        <div className="relative w-full h-32 bg-slate-900/50 rounded-lg p-4 mb-4 overflow-hidden font-mono text-xs">
          <div className="text-blue-400">Class <span className="text-white">ChatBot</span>&#123;</div>
          <div className="text-gray-500 ml-4">address <span className="text-white">public owner</span>;</div>
          <div className="text-gray-500 ml-4">int <span className="text-white">private response</span>;</div>
          <div className="text-blue-400 ml-4"><span className="text-blue-300">constructor</span>()&#123;</div>
          <div className="text-gray-500 ml-8">owner = msg.sender;</div>
          <div className="text-gray-500 ml-4">&#125;</div>
          <div className="text-blue-400 ml-4"><span className="text-blue-300">function</span> <span className="text-gray-400">response(msg)&#123;</span></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
        </div>
      )
    },
    {
      icon: Zap,
      title: "Automation",
      description: "We automate daily tasks like customer support and emails, saving you valuable hours.",
      visual: (
        <div className="relative w-full h-32 bg-slate-900/50 rounded-lg p-3 mb-4 space-y-2">
          <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg p-2 border border-blue-400/20">
            <Zap className="text-blue-400" size={16} />
            <span className="text-white text-sm">Trigger</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg p-2 border border-slate-400/20">
            <div className="w-3 h-3 bg-slate-400 rounded"></div>
            <span className="text-gray-300 text-sm">Prompts</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg p-2 border border-blue-300/20">
            <Send className="text-blue-300" size={16} />
            <span className="text-gray-300 text-sm">Send Email</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Create Your Custom <span className="bg-gradient-to-r from-blue-600 to-slate-500 bg-clip-text text-transparent">AI Employee</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tell us what you need, and we'll create a custom AI to make your work faster and easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-800/40 backdrop-blur-sm border border-blue-800/20 hover:border-blue-600/40 transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600/20 to-slate-500/20 rounded-xl mb-4 group-hover:from-blue-500/30 group-hover:to-slate-400/30 transition-all duration-300">
                  <service.icon className="text-blue-400 group-hover:text-blue-300 transition-colors" size={32} />
                </div>
                <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-300 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {service.visual}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
