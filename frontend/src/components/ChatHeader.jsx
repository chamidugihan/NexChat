import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="px-4 py-3 border-b border-base-300 bg-base-100 relative overflow-hidden">

      {/* Background orb */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between relative z-10">

        {/* Left — Avatar + Info */}
        <div className="flex items-center gap-3">

          {/* Avatar */}
          <div className="relative group">
            <div className={`
              absolute -inset-0.5 rounded-full blur-sm transition-all duration-300 opacity-0
              ${isOnline ? "group-hover:opacity-50 bg-success" : "group-hover:opacity-30 bg-base-content"}
            `} />
            <div className="relative">
              <img
                src={selectedUser.profilePic || `https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedUser.fullName}`}
                alt={selectedUser.fullName}
                className="size-10 rounded-full object-cover border-2 border-base-300"
              />
              {/* Online dot */}
              <span className={`
                absolute bottom-0 right-0 size-2.5 rounded-full ring-2 ring-base-100
                ${isOnline ? "bg-success" : "bg-base-300"}
              `} />
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-bold text-sm text-base-content">
              {selectedUser.fullName}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-success animate-pulse" : "bg-base-content/20"}`} />
              <p className={`text-xs ${isOnline ? "text-success" : "text-base-content/30"}`}>
                {isOnline ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        </div>

        {/* Right — Close button */}
        <button
          onClick={() => setSelectedUser(null)}
          className="size-8 rounded-xl flex items-center justify-center bg-base-200 border border-base-300 hover:bg-error/10 hover:border-error/30 hover:text-error text-base-content/40 transition-all duration-200"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;