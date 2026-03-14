import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100 relative overflow-hidden">

      {/* Background orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md text-center space-y-6 relative z-10">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative group">

            {/* Outer pulse ring */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 animate-pulse" />

            {/* Middle ring */}
            <div className="absolute -inset-2 rounded-2xl bg-primary/10 border border-primary/10" />

            {/* Icon box */}
            <div className="relative w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-xl shadow-primary/10 group-hover:bg-primary/20 transition-all duration-300">
              <MessageSquare className="w-10 h-10 text-primary" />

              {/* Shine effect */}
              <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary/30" />
            </div>

            {/* Floating dots around icon */}
            <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-primary/40 animate-bounce [animation-delay:0ms]" />
            <div className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-secondary/40 animate-bounce [animation-delay:200ms]" />
            <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 rounded-full bg-accent/40 animate-bounce [animation-delay:400ms]" />
          </div>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-px rounded-full bg-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="w-8 h-px rounded-full bg-secondary/30" />
        </div>

        {/* Welcome Text */}
        <div className="space-y-3">
          <h2 className="text-2xl font-black tracking-tight text-primary">
            Welcome to NexChat!
          </h2>
          <p className="text-base-content/40 text-sm leading-relaxed tracking-wide">
            Select a conversation from the sidebar to start chatting
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {["💬 Real-time chat", "🔒 Secure", "⚡ Fast"].map((feature) => (
            <span
              key={feature}
              className="px-3 py-1.5 rounded-full bg-base-200 border border-base-300 text-xs text-base-content/50 font-medium hover:border-primary/30 hover:text-primary/60 transition-all duration-200"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Bottom dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/30 animate-bounce [animation-delay:0ms]" />
          <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce [animation-delay:150ms]" />
          <div className="w-1.5 h-1.5 rounded-full bg-secondary/30 animate-bounce [animation-delay:300ms]" />
        </div>

        {/* Footer brand */}
        <p className="text-base-content/20 text-xs tracking-widest uppercase">
          ✦ NexChat ✦
        </p>

      </div>
    </div>
  );
};

export default NoChatSelected;