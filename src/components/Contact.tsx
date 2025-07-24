
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-slate-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800/40 backdrop-blur-sm border border-blue-800/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-600"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-600"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Company
                </label>
                <Input 
                  placeholder="Your Company" 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-600"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-slate-500 hover:from-blue-500 hover:to-slate-400 text-white group">
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-slate-500/20 rounded-lg flex items-center justify-center border border-blue-600/20">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">contact@evilo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-slate-500/20 rounded-lg flex items-center justify-center border border-blue-600/20">
                    <Phone className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (437) 324-0800</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-slate-500/20 rounded-lg flex items-center justify-center border border-blue-600/20">
                    <MapPin className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Office</h4>
                    <p className="text-gray-300">Toronto, ON</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800/40 backdrop-blur-sm border border-blue-800/20 overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-slate-500 to-blue-600 bg-clip-text text-transparent">
                      Evilo
                    </h1>
                    <div className="absolute -inset-2 flex items-center justify-center">
                      <Sparkles className="text-blue-400/30 animate-pulse" size={16} />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <div className="w-2 h-2 bg-slate-400/60 rounded-full animate-pulse delay-300"></div>
                    </div>
                    <div className="absolute -bottom-2 -left-2">
                      <div className="w-2 h-2 bg-blue-400/60 rounded-full animate-pulse delay-700"></div>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent mb-4"></div>
                <p className="text-xs text-gray-400">
                  © 2024 Evilo. All rights reserved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
