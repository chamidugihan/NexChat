const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 relative overflow-hidden">

      {/* Background orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md text-center relative z-10">

        {/* NexChat brand */}
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tight text-primary mb-1">
            NexChat
          </h1>
          <p className="text-base-content/30 text-[10px] tracking-[0.4em] uppercase">
            Connect · Talk · Share
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`
                aspect-square rounded-2xl relative overflow-hidden
                border border-primary/10
                ${i % 2 === 0
                  ? "bg-primary/20 animate-pulse shadow-lg shadow-primary/10"
                  : "bg-base-300/50 backdrop-blur-sm"
                }
                ${i === 4 ? "bg-primary/30 border-primary/30 scale-105" : ""}
              `}
            >
              {i % 2 === 0 && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              )}
              {i === 4 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary/60 animate-ping" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-primary/30 rounded-full" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="w-8 h-px bg-secondary/30 rounded-full" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-3 text-primary">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-base-content/50 text-sm leading-relaxed tracking-wide">
          {subtitle}
        </p>

        {/* Bottom dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/30 animate-bounce [animation-delay:0ms]" />
          <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce [animation-delay:150ms]" />
          <div className="w-1.5 h-1.5 rounded-full bg-secondary/30 animate-bounce [animation-delay:300ms]" />
        </div>

      </div>
    </div>
  );
};

export default AuthImagePattern;