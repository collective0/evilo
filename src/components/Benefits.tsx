import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, DollarSign, BarChart3, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy."
    },
    {
      icon: Users,
      title: "Better Customer Experience", 
      description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime."
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions."
    },
    {
      icon: Zap,
      title: "Scalability & Growth",
      description: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs."
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            The Key Benefits of AI for Your{" "}
            <span className="animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:300%_300%]">
              Business Growth
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Discover how AI automation <span className="text-primary font-medium">enhances efficiency</span>, reduces costs, and drives business growth with smarter, faster processes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="glass-strong border border-primary/20 hover-lift hover-glow group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="scan-line"></div>
              <CardContent className="p-10 relative z-10">
                <div className="mb-8 flex justify-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 group-hover:scale-110 transition-all duration-500 animate-pulse-glow">
                    <benefit.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-300">
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