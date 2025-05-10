import React from "react";
import EmailCaptureForm from "./EmailCaptureForm";
import { Sparkles, Zap, TrendingUp, LineChart } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  title = "Discover AI Trends Before Anyone Else",
  subtitle = "Our platform uses advanced AI to identify emerging trends and opportunities in the tech landscape before they go mainstream.",
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#2D1B69] via-[#1E1E3F] to-[#120D3A] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6bTEyIDB2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTI0IDB2Nmg2di02aC02em0wLTEydjZoNnYtNmgtNnptLTEyIDB2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-[10%] w-12 h-12 bg-mint/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-[15%] w-20 h-20 bg-secondary/10 rounded-full blur-xl animate-pulse delay-700"></div>
      <div className="absolute top-1/3 right-[20%] w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-[25%] w-24 h-24 bg-mint/5 rounded-full blur-xl animate-pulse delay-500"></div>

      {/* Floating icons */}
      <div className="absolute top-40 left-[15%] animate-float opacity-20">
        <Zap size={32} className="text-mint" />
      </div>
      <div className="absolute bottom-60 right-[25%] animate-float-delayed opacity-20">
        <TrendingUp size={32} className="text-accent" />
      </div>
      <div className="absolute top-1/2 right-[10%] animate-float-slow opacity-20">
        <LineChart size={32} className="text-secondary" />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-10 text-center">
          <div className="space-y-6 max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#3DD598]/10 border border-[#3DD598]/20 mb-4">
              <Sparkles className="h-3.5 w-3.5 mr-2 text-mint" />
              <span className="text-xs font-medium text-mint">
                Now in Beta • Limited Access
              </span>
            </div>

            {/* Title with animated gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-mono tracking-tighter relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-mint via-accent to-secondary animate-gradient-x bg-300%">
                {title}
              </span>
              <div className="absolute -top-6 -right-6 text-mint opacity-20 rotate-12">
                <Sparkles className="h-5 w-5" />
              </div>
            </h1>

            {/* Subtitle */}
            <p className="text-lavender md:text-xl max-w-2xl mx-auto tracking-wide leading-relaxed">
              {subtitle}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold font-mono text-mint">
                  500+
                </div>
                <div className="text-xs text-[#A89EC9]">AI Trends Tracked</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold font-mono text-accent">
                  24/7
                </div>
                <div className="text-xs text-[#A89EC9]">Real-time Updates</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold font-mono text-secondary">
                  98%
                </div>
                <div className="text-xs text-[#A89EC9]">
                  Prediction Accuracy
                </div>
              </div>
            </div>
          </div>

          {/* Email capture form */}
          <div className="w-full max-w-md relative">
            <EmailCaptureForm />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NCIgdmlld0JveD0iMCAwIDE0NDAgNzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMEgxNDQwVjc0SDBWMFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI3MjAiIHkxPSIwIiB4Mj0iNzIwIiB5Mj0iNzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMUUxRTNGIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxRTFFM0YiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=')] bg-repeat-x opacity-50"></div>
    </section>
  );
};

export default HeroSection;
