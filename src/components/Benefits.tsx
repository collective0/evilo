import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, DollarSign, BarChart3, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-gray-400" />,
      title: "Increased Productivity",
      description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy."
    },
    {
      icon: <Users className="w-8 h-8 text-gray-400" />,
      title: "Better Customer Experience",
      description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction."
    },
    {
      icon: <Clock className="w-8 h-8 text-gray-400" />,
      title: "24/7 Availability",
      description: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-gray-400" />,
      title: "Cost Reduction",
      description: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-gray-400" />,
      title: "Data-Driven Insights",
      description: "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions."
    },
    {
      icon: <Zap className="w-8 h-8 text-gray-400" />,
      title: "Scalability & Growth",
      description: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs."
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Key Benefits of AI for Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Business Growth
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm group"
            >
              <CardContent className="p-8">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;