import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });
      if (error) throw error;
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you soon."
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-20 relative z-10">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="John" required className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-600" />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Doe" required className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-600" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-600" />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Company
                  </label>
                  <Input name="company" value={formData.company} onChange={handleInputChange} placeholder="Your Company" className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-600" />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange} placeholder="Tell us about your project..." required className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-slate-500 hover:from-blue-500 hover:to-slate-400 text-white group disabled:opacity-50">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
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
                    <p className="text-gray-300">contact@evilo.ca</p>
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
                    <div className="h-16 w-40 bg-slate-700/50 rounded flex items-center justify-center border border-blue-600/30">
                      <span className="text-blue-400 text-lg font-medium">LOGO</span>
                    </div>
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
    </section>;
};
export default Contact;