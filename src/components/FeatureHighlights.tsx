import React from "react";
import {
  Zap,
  Brain,
  Filter,
  LineChart,
  BarChart3,
  PieChart,
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

const Feature = ({
  icon,
  title,
  description = "",
  color,
  delay = 0,
}: FeatureProps) => {
  return (
    <div
      className={`group flex flex-col items-center text-center p-8 bg-[#1E1E3F]/80 backdrop-blur-sm rounded-xl border-2 border-${color}/20 hover:border-${color}/50 transition-all duration-500 shadow-lg hover:shadow-${color}/20 hover:-translate-y-1`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`mb-6 p-4 rounded-full bg-${color}/10 group-hover:bg-${color}/20 transition-all duration-500 transform group-hover:scale-110`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-mono font-bold mb-3 text-[#E6D7FF]">
        {title}
      </h3>
      <p className="text-[#A89EC9] text-sm mb-5">{description}</p>
    </div>
  );
};

const FeatureHighlights = () => {
  const features = [
    {
      icon: <Zap size={36} className="text-mint" />,
      title: "Real-time AI trend detection",
      description:
        "Stay ahead with instant insights on emerging AI technologies and patterns.",
      color: "mint",
      delay: 0,
    },
    {
      icon: <Brain size={36} className="text-secondary" />,
      title: "Powered by LLMs",
      description:
        "Advanced language models analyze vast datasets to extract meaningful insights.",
      color: "secondary",
      delay: 100,
    },
    {
      icon: <Filter size={36} className="text-amber" />,
      title: "Smart signal, no noise",
      description:
        "Focus on what matters with our intelligent filtering technology.",
      color: "amber",
      delay: 200,
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-24 px-4 md:px-8 bg-gradient-to-t from-[#120D3A] to-[#1E1E3F] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NCIgdmlld0JveD0iMCAwIDE0NDAgNzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNzRIMTQ0MFYwSDBWNzRaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNzIwIiB5MT0iNzQiIHgyPSI3MjAiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzFFMUUzRiIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMUUxRTNGIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+')]  bg-repeat-x opacity-50 transform rotate-180"></div>

      {/* Floating chart elements */}
      <div className="absolute -left-16 top-1/4 opacity-5">
        <LineChart size={180} className="text-mint" />
      </div>
      <div className="absolute -right-16 bottom-1/4 opacity-5">
        <BarChart3 size={180} className="text-secondary" />
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <PieChart size={300} className="text-amber" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black font-mono tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-mint to-secondary">
            Powerful AI-Driven Features
          </h2>
          <p className="text-[#A89EC9] max-w-2xl mx-auto">
            Our platform combines cutting-edge AI technology with intuitive
            design to help you stay ahead of the curve.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
