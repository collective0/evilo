
import { Settings, Code, Zap, Send, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you understand how our AI solutions can benefit your business. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value && !isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleInputFocus = () => {
    setIsExpanded(true);
  };

  const handleInputBlur = () => {
    if (!inputValue) {
      setIsExpanded(false);
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("https://collectiveworld.app.n8n.cloud/webhook/support-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.text,
          timestamp: userMessage.timestamp.toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: data.reply || data.response || data.message || "Thank you for your message. Our team will get back to you soon!",
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please try again later or contact us directly.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Connection Error",
        description: "Unable to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

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

        {/* AI Chat Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not sure if we have a solution for you? 
              <span className="bg-gradient-to-r from-blue-600 to-slate-500 bg-clip-text text-transparent"> Ask our system</span>
            </h3>
            <p className="text-gray-300">
              Get instant answers about our AI automation capabilities
            </p>
          </div>

          {/* Expandable Chat Box */}
          <div 
            className={`mx-auto transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-w-4xl' : 'max-w-md'
            }`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => {
              if (!inputValue) {
                setIsExpanded(false);
              }
            }}
          >
            <Card className={`bg-slate-800/40 backdrop-blur-sm border border-blue-800/20 overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'rounded-lg' : 'rounded-full'
            }`}>
              <CardContent className={`transition-all duration-500 ease-in-out ${
                isExpanded ? 'p-6' : 'p-3'
              }`}>
                {/* Chat Messages Area - Only visible when expanded */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isExpanded ? 'h-64 opacity-100 mb-4' : 'h-0 opacity-0 mb-0'
                }`}>
                  <div className="h-full bg-slate-900/50 rounded-lg p-4 overflow-y-auto border border-slate-700/50">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex items-start space-x-3 ${
                          message.isBot ? '' : 'flex-row-reverse space-x-reverse'
                        }`}>
                          {message.isBot && (
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-slate-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <Zap size={16} className="text-white" />
                            </div>
                          )}
                          <div className={`rounded-lg px-4 py-2 max-w-xs ${
                            message.isBot 
                              ? 'bg-slate-700/50 text-gray-200' 
                              : 'bg-blue-600/80 text-white ml-auto'
                          }`}>
                            <p className="text-sm">{message.text}</p>
                          </div>
                          {!message.isBot && (
                            <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs font-medium">U</span>
                            </div>
                          )}
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-slate-500 rounded-full flex items-center justify-center">
                            <Zap size={16} className="text-white" />
                          </div>
                          <div className="bg-slate-700/50 rounded-lg px-4 py-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Ask about our AI automation services..." 
                    className="flex-1 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-600 transition-all duration-300"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                  />
                  <Button 
                    className={`bg-gradient-to-r from-blue-600 to-slate-500 hover:from-blue-500 hover:to-slate-400 text-white transition-all duration-300 ${
                      isExpanded ? 'px-6' : 'px-3'
                    }`}
                    onClick={sendMessage}
                    disabled={isLoading || !inputValue.trim()}
                  >
                    <Send size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
