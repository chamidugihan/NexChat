import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader.jsx";
import MessageInput from "./MessageInput.jsx";
import MessageSkeleton from "./skelatons/MessageSkeleton.jsx";
import { useAuthStore } from "../store/useAuthStore.js";
import { fromatMessageTime } from "../lib/utils.js";

function ChatContainer() {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessage,
    unsubscribeFromMessage,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessage();
    return () => unsubscribeFromMessage();
  }, [getMessages, selectedUser._id, subscribeToMessage, unsubscribeFromMessage]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto bg-base-100 relative">

      <ChatHeader />

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {/* Background orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/3 rounded-full blur-3xl" />
        </div>

        {/* Empty state */}
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full gap-4 py-20 relative z-10">
            <div className="size-16 rounded-2xl bg-base-200 border border-base-300 flex items-center justify-center shadow-lg">
              <span className="text-3xl">💬</span>
            </div>
            <div className="text-center">
              <p className="font-semibold text-base-content/50 text-sm">No messages yet</p>
              <p className="text-base-content/30 text-xs mt-1">Say hello to {selectedUser.fullName}!</p>
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.map((msg, idx) => {
          const isSent = msg.senderId === authUser._id;
          const isLast = idx === messages.length - 1;

          return (
            <div
              key={msg._id}
              ref={isLast ? messageEndRef : null}
              className={`flex items-end gap-2.5 relative z-10 ${isSent ? "flex-row-reverse" : "flex-row"}`}
            >
              {/* Avatar */}
              <div className="shrink-0 mb-1">
                <div className="relative">
                  <img
                    src={
                      isSent
                        ? authUser.profilePic || `https://api.dicebear.com/7.x/avataaars/svg?seed=${authUser.fullName}`
                        : selectedUser.profilePic || `https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedUser.fullName}`
                    }
                    alt="profile"
                    className="size-8 rounded-full object-cover border-2 border-base-300 shadow-sm"
                  />
                  {/* Online dot on avatar */}
                  <div className={`absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full ring-2 ring-base-100
                    ${isSent ? "bg-primary/60" : "bg-success"}
                  `} />
                </div>
              </div>

              {/* Bubble content */}
              <div className={`flex flex-col gap-1 max-w-[65%] ${isSent ? "items-end" : "items-start"}`}>

                {/* Image */}
                {msg.image && (
                  <div className={`
                    relative overflow-hidden shadow-lg group
                    rounded-2xl border-2
                    ${isSent
                      ? "rounded-br-sm border-primary/20"
                      : "rounded-bl-sm border-base-300"
                    }
                  `}>
                    <img
                      src={msg.image}
                      alt="Attachment"
                      className="max-w-[220px] object-cover transition-transform duration-300 group-hover:scale-105 cursor-zoom-in"
                    />
                    {/* Image overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-200" />
                  </div>
                )}

                {/* Text bubble */}
                {msg.text && (
                  <div className={`
                    relative px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm
                    ${isSent
                      ? "bg-primary text-primary-content rounded-br-sm"
                      : "bg-base-200 text-base-content rounded-bl-sm border border-base-300"
                    }
                  `}>
                    {msg.text}

                    {/* Bubble tail shine */}
                    {isSent && (
                      <div className="absolute top-2 right-3 w-1 h-1 rounded-full bg-white/20" />
                    )}
                  </div>
                )}

                {/* Timestamp */}
                <span className={`text-[10px] text-base-content/30 px-1 ${isSent ? "text-right" : "text-left"}`}>
                  {fromatMessageTime(msg.createdAt)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <MessageInput />
    </div>
  );
}

export default ChatContainer;