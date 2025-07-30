import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Zap, MessageCircle, X, Minimize2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
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
      const requestPayload = {
        chatInput: userMessage.text,
        sessionId: "user-session-" + Date.now(),
      };
      
      const response = await fetch("https://collectiveworld.app.n8n.cloud/webhook/support-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestPayload),
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

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const maximizeChat = () => {
    setIsMinimized(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className={`mb-4 transition-all duration-300 ease-out ${
          isMinimized 
            ? 'opacity-0 scale-95 pointer-events-none' 
            : 'opacity-100 scale-100 animate-scale-in'
        }`}>
          <Card className="w-80 h-96 bg-slate-800/95 backdrop-blur-lg border border-blue-800/30 shadow-2xl shadow-blue-900/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600/20 to-slate-500/20 border-b border-blue-800/30 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-slate-500 rounded-full flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">AI Assistant</h3>
                  <p className="text-gray-400 text-xs">Ask about our services</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Button
                  size="sm"
                  variant="ghost"
                  className="w-8 h-8 p-0 hover:bg-white/10"
                  onClick={minimizeChat}
                >
                  <Minimize2 size={14} className="text-gray-400" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="w-8 h-8 p-0 hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={14} className="text-gray-400" />
                </Button>
              </div>
            </div>

            <CardContent className="p-0 h-full flex flex-col">
              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto bg-slate-900/50">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex items-start space-x-2 ${
                      message.isBot ? '' : 'flex-row-reverse space-x-reverse'
                    }`}>
                      {message.isBot && (
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-slate-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Zap size={12} className="text-white" />
                        </div>
                      )}
                      <div className={`rounded-lg px-3 py-2 max-w-xs text-sm ${
                        message.isBot 
                          ? 'bg-slate-700/70 text-gray-200' 
                          : 'bg-blue-600/80 text-white'
                      }`}>
                        <p>{message.text}</p>
                      </div>
                      {!message.isBot && (
                        <div className="w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">U</span>
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-slate-500 rounded-full flex items-center justify-center">
                        <Zap size={12} className="text-white" />
                      </div>
                      <div className="bg-slate-700/70 rounded-lg px-3 py-2">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-3 border-t border-slate-700/50 bg-slate-800/30">
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Type your question..."
                    className="flex-1 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-600 text-sm h-8"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                  />
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-slate-500 hover:from-blue-500 hover:to-slate-400 text-white h-8 w-8 p-0"
                    onClick={sendMessage}
                    disabled={isLoading || !inputValue.trim()}
                  >
                    <Send size={14} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Minimized state */}
      {isOpen && isMinimized && (
        <div className="mb-4">
          <Button
            className="bg-gradient-to-r from-blue-600/90 to-slate-500/90 hover:from-blue-600 hover:to-slate-500 text-white w-12 h-8 rounded-lg shadow-lg animate-scale-in"
            onClick={maximizeChat}
          >
            <MessageCircle size={16} />
          </Button>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        className={`bg-gradient-to-r from-blue-600 to-slate-500 hover:from-blue-500 hover:to-slate-400 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`}
        onClick={toggleChat}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
    </div>
  );
};

export default FloatingChatbot;