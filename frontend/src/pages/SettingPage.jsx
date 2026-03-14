import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send, Palette, Monitor, Check } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going? 👋", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen pt-20 pb-10 bg-base-100 relative overflow-hidden">

      {/* ✅ Only soft orbs - no shapes */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-5xl space-y-10 relative z-10">

        {/* Page Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-px rounded-full bg-primary/40" />
            <span className="text-xs tracking-[0.3em] uppercase font-bold text-primary/60">
              Customize
            </span>
            <div className="w-8 h-px rounded-full bg-secondary/40" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-primary">Settings</h1>
          <p className="text-base-content/40 text-sm mt-1 tracking-wide">
            Personalize your NexChat experience
          </p>
        </div>

        {/* Theme Section */}
        <div className="bg-base-200/80 backdrop-blur-sm rounded-3xl p-6 border border-base-300 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Palette className="size-4 text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-base-content">Theme</h2>
              <p className="text-xs text-base-content/40 tracking-wide">
                Choose a theme for your chat interface
              </p>
            </div>
            <div className="ml-auto px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                {theme}
              </span>
            </div>
          </div>

          {/* Theme Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {THEMES.map((t) => (
              <div key={t} className="relative group">
                <button
                  onClick={() => setTheme(t)}
                  className={`
                    w-full flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all duration-200
                    ${theme === t
                      ? "bg-base-100 border border-primary/40 shadow-md shadow-primary/10 scale-105"
                      : "hover:bg-base-100 border border-transparent hover:border-base-300 hover:scale-105"
                    }
                  `}
                >
                  <div className="relative h-8 w-full rounded-lg overflow-hidden" data-theme={t}>
                    <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                      <div className="rounded bg-primary" />
                      <div className="rounded bg-secondary" />
                      <div className="rounded bg-accent" />
                      <div className="rounded bg-neutral" />
                    </div>
                    {theme === t && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                        <Check className="size-4 text-white drop-shadow" />
                      </div>
                    )}
                  </div>
                  <span className={`text-[10px] font-medium truncate w-full text-center transition-colors duration-200
                    ${theme === t ? "text-primary" : "text-base-content/50 group-hover:text-base-content/80"}
                  `}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </span>
                  {theme === t && (
                    <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                  )}
                </button>

                {/* Tooltip */}
                <div className="
                  absolute -top-10 left-1/2 -translate-x-1/2
                  px-2.5 py-1.5 rounded-lg
                  bg-base-content text-base-100
                  text-[10px] font-bold tracking-wider uppercase whitespace-nowrap
                  opacity-0 group-hover:opacity-100
                  scale-90 group-hover:scale-100
                  transition-all duration-200
                  pointer-events-none z-50 shadow-lg
                ">
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-base-content rotate-45" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-base-200/80 backdrop-blur-sm rounded-3xl p-6 border border-base-300 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
              <Monitor className="size-4 text-secondary" />
            </div>
            <div>
              <h2 className="font-bold text-base-content">Preview</h2>
              <p className="text-xs text-base-content/40 tracking-wide">
                See how your theme looks in action
              </p>
            </div>
          </div>

          {/* Chat Preview */}
          <div className="rounded-2xl border border-base-300 overflow-hidden shadow-lg">

            {/* Chat Header */}
            <div className="px-4 py-3 bg-base-100 border-b border-base-300">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold text-sm">
                    J
                  </div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-success border-2 border-base-100" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-base-content">John Doe</h3>
                  <p className="text-[11px] text-success flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
                    Online
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
              {PREVIEW_MESSAGES.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-end gap-2 ${message.isSent ? "justify-end" : "justify-start"}`}
                >
                  {!message.isSent && (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-content text-[10px] font-bold shrink-0">
                      J
                    </div>
                  )}
                  <div className={`
                    max-w-[75%] rounded-2xl px-4 py-2.5 shadow-sm
                    ${message.isSent
                      ? "bg-primary text-primary-content rounded-br-sm"
                      : "bg-base-200 text-base-content rounded-bl-sm"
                    }
                  `}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className={`text-[10px] mt-1 ${message.isSent ? "text-primary-content/60 text-right" : "text-base-content/40"}`}>
                      12:10 PM
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-base-300 bg-base-100">
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  className="input input-bordered flex-1 text-sm h-10 rounded-xl bg-base-200 border-base-300 text-base-content/50"
                  value="This is a preview ✨"
                  readOnly
                />
                <button className="btn btn-primary h-10 min-h-0 rounded-xl px-4 shadow-md shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-base-content/20 text-xs tracking-widest uppercase">
          ✦ NexChat ✦
        </p>

      </div>
    </div>
  );
};

export default SettingsPage;