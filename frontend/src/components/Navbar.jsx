import { LogOut, MessageSquare, Settings, User } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';

function Navbar() {
  const { authUser, logout } = useAuthStore();

  return (
    <header className="fixed w-full top-0 z-40 backdrop-blur-xl bg-base-100/80 border-b border-base-300">

      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group hover:opacity-90 transition-all">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <MessageSquare className="size-5 text-primary" />
              </div>
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-base-content leading-none">
                NexChat
              </h1>
              <p className="text-[8px] tracking-widest uppercase opacity-40 leading-none mt-0.5 text-base-content">
                Connect · Talk · Share
              </p>
            </div>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-2">

            {/* Settings */}
            <Link
              to="/settings"
              className="btn btn-sm btn-ghost gap-2 rounded-xl text-base-content/60 hover:text-base-content transition-all duration-200"
            >
              <Settings className="size-4" />
              <span className="hidden sm:inline text-xs tracking-wider uppercase">Settings</span>
            </Link>

            {authUser && (
              <>
                {/* Profile */}
                <Link
                  to="/profile"
                  className="btn btn-sm btn-ghost gap-2 rounded-xl text-base-content/60 hover:text-base-content transition-all duration-200"
                >
                  {authUser.profilePic ? (
                    <img
                      src={authUser.profilePic}
                      alt="profile"
                      className="size-5 rounded-full object-cover"
                    />
                  ) : (
                    <User className="size-4" />
                  )}
                  <span className="hidden sm:inline text-xs tracking-wider uppercase">Profile</span>
                </Link>

                {/* Logout */}
                <button
                  onClick={logout}
                  className="btn btn-sm btn-ghost gap-2 rounded-xl text-error/70 hover:text-error hover:bg-error/10 transition-all duration-200"
                >
                  <LogOut className="size-4" />
                  <span className="hidden sm:inline text-xs tracking-wider uppercase">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;