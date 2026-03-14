import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "./skelatons/SidebarSkeleton";
import { useAuthStore } from "../store/useAuthStore";

function Sidebar() { // ✅ capital S
  const { selectedUser, getUsers, users, isUsersLoading, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200 bg-base-100 relative overflow-hidden">

      {/* Background orbs */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="border-b border-base-300 w-full p-4 relative">
        <div className="flex items-center gap-3">

          {/* Icon */}
          <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <Users className="w-4 h-4 text-primary" />
          </div>

          {/* Title + count */}
          <div className="hidden lg:flex items-center justify-between flex-1">
            <span className="font-bold text-sm tracking-wide text-base-content">
              Contacts
            </span>
            <div className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-[10px] font-bold text-primary">
                {filteredUsers.length}
              </span>
            </div>
          </div>
        </div>

        {/* Online toggle */}
        <div className="hidden lg:flex items-center gap-2 mt-3">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div
              onClick={() => setShowOnlineOnly(!showOnlineOnly)}
              className={`
                relative w-8 h-4 rounded-full transition-all duration-300 cursor-pointer shrink-0
                ${showOnlineOnly ? "bg-primary" : "bg-base-300"}
              `}
            >
              <div className={`
                absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-all duration-300
                ${showOnlineOnly ? "left-4" : "left-0.5"}
              `} />
            </div>
            <span className="text-xs text-base-content/50 group-hover:text-base-content/80 transition-colors">
              Online only
            </span>
            <div className="px-1.5 py-0.5 rounded-full bg-success/10 border border-success/20">
              <span className="text-[10px] font-bold text-success">
                {onlineUsers.length - 1}
              </span>
            </div>
          </label>
        </div>
      </div>

      {/* Users list */}
      <div className="overflow-y-auto w-full py-2 px-2 space-y-1">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-3 rounded-xl
              transition-all duration-200 group
              ${selectedUser?._id === user._id
                ? "bg-primary/10 border border-primary/20 shadow-sm shadow-primary/10"
                : "hover:bg-base-200 border border-transparent hover:border-base-300"
              }
            `}
          >
            {/* Avatar */}
            <div className="relative mx-auto lg:mx-0 shrink-0">
              <div className={`
                absolute -inset-0.5 rounded-full blur-sm opacity-0 transition-all duration-300
                ${selectedUser?._id === user._id
                  ? "opacity-40 bg-primary"
                  : "group-hover:opacity-20 bg-primary"
                }
              `} />
              <img
                src={user.profilePic || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.fullName}`}
                alt={user.fullName}
                className="relative size-11 object-cover rounded-full border-2 border-base-300 group-hover:border-primary/30 transition-colors duration-200"
              />
              {/* Online/Offline dot */}
              <span className={`
                absolute bottom-0 right-0 size-3 rounded-full ring-2 ring-base-100
                ${onlineUsers.includes(user._id) ? "bg-success" : "bg-base-300"}
              `} />
            </div>

            {/* User info */}
            <div className="hidden lg:flex flex-col text-left min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <span className={`font-semibold text-sm truncate transition-colors duration-200
                  ${selectedUser?._id === user._id
                    ? "text-primary"
                    : "text-base-content group-hover:text-primary/80"
                  }
                `}>
                  {user.fullName}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className={`w-1.5 h-1.5 rounded-full shrink-0
                  ${onlineUsers.includes(user._id) ? "bg-success" : "bg-base-content/20"}
                `} />
                <span className={`text-xs ${onlineUsers.includes(user._id) ? "text-success" : "text-base-content/30"}`}>
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </span>
              </div>
            </div>

            {/* Active bar */}
            {selectedUser?._id === user._id && (
              <div className="hidden lg:block w-1 h-6 rounded-full bg-primary shrink-0" />
            )}
          </button>
        ))}

        {/* Empty state */}
        {filteredUsers.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 gap-3">
            <div className="size-10 rounded-xl bg-base-200 border border-base-300 flex items-center justify-center">
              <Users className="size-5 text-base-content/30" />
            </div>
            <p className="text-xs text-base-content/30 tracking-wide">
              {showOnlineOnly ? "No online users" : "No contacts found"}
            </p>
          </div>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-base-100 to-transparent pointer-events-none" />
    </aside>
  );
}

export default Sidebar; // ✅ capital S