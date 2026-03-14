const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-base-100 relative overflow-hidden">

      {/* Background orbs */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {skeletonMessages.map((_, idx) => {
        const isSent = idx % 2 !== 0;
        return (
          <div
            key={idx}
            className={`flex items-end gap-2 ${isSent ? "flex-row-reverse" : "flex-row"}`}
            style={{ opacity: 1 - idx * 0.08 }}
          >
            {/* Avatar */}
            <div className="shrink-0">
              <div className="skeleton size-9 rounded-full" />
            </div>

            {/* Bubble + timestamp */}
            <div className={`flex flex-col gap-1.5 ${isSent ? "items-end" : "items-start"}`}>

              {/* Name skeleton */}
              <div className={`skeleton h-3 w-16 rounded-lg ${isSent ? "ml-auto" : ""}`} />

              {/* Message bubble */}
              <div className={`
                skeleton rounded-2xl
                ${isSent ? "rounded-br-sm" : "rounded-bl-sm"}
                ${idx % 3 === 0 ? "h-14 w-48" : idx % 3 === 1 ? "h-10 w-36" : "h-16 w-56"}
              `} />

              {/* Timestamp skeleton */}
              <div className="skeleton h-2.5 w-10 rounded-lg opacity-50" />
            </div>
          </div>
        );
      })}

      {/* Typing indicator at bottom */}
      <div className="flex items-end gap-2">
        <div className="skeleton size-9 rounded-full shrink-0" />
        <div className="flex flex-col gap-1.5 items-start">
          <div className="skeleton h-3 w-16 rounded-lg" />
          <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-base-200 border border-base-300">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-base-content/20 animate-bounce [animation-delay:0ms]" />
              <div className="w-2 h-2 rounded-full bg-base-content/20 animate-bounce [animation-delay:150ms]" />
              <div className="w-2 h-2 rounded-full bg-base-content/20 animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
          <div className="skeleton h-2.5 w-10 rounded-lg opacity-50" />
        </div>
      </div>

    </div>
  );
};

export default MessageSkeleton;