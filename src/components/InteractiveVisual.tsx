
import { useState, useEffect } from "react";
import { Brain, Zap, Target, Sparkles } from "lucide-react";

const InteractiveVisual = () => {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    { icon: Brain, label: "AI Intelligence", color: "from-blue-800 to-blue-700" },
    { icon: Zap, label: "Automation", color: "from-purple-800 to-purple-700" },
    { icon: Target, label: "Precision", color: "from-indigo-800 to-indigo-700" },
    { icon: Sparkles, label: "Innovation", color: "from-violet-800 to-violet-700" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Central Hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-800/20 to-purple-800/20 rounded-full border-2 border-blue-600/30 flex items-center justify-center backdrop-blur-sm">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-purple-800 rounded-full flex items-center justify-center">
            <Brain className="text-white" size={24} />
          </div>
        </div>
      </div>

      {/* Orbiting Nodes */}
      {nodes.map((node, index) => {
        const angle = (index * 90) - 90; // Start from top, 90-degree intervals
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        const isActive = activeNode === index;

        return (
          <div
            key={index}
            className="absolute transition-all duration-500 ease-in-out"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              opacity: isActive ? 1 : 0.6,
              scale: isActive ? 1.1 : 1
            }}
            onMouseEnter={() => setActiveNode(index)}
          >
            {/* Connection Line */}
            <div
              className={`absolute w-0.5 bg-gradient-to-r ${node.color} transition-opacity duration-300`}
              style={{
                height: `${radius}px`,
                transformOrigin: 'bottom center',
                transform: `rotate(${angle + 180}deg)`,
                opacity: isActive ? 0.8 : 0.3,
                left: '50%',
                top: '50%',
                marginLeft: '-1px',
                marginTop: `-${radius}px`
              }}
            />

            {/* Node */}
            <div className={`w-16 h-16 bg-gradient-to-br ${node.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${isActive ? 'ring-2 ring-white/50' : ''}`}>
              <node.icon className="text-white" size={20} />
            </div>

            {/* Label */}
            <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              <span className="text-white text-sm font-medium bg-slate-800/80 px-3 py-1 rounded-full backdrop-blur-sm border border-blue-600/20">
                {node.label}
              </span>
            </div>
          </div>
        );
      })}

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + ((i % 3) * 20)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveVisual;
