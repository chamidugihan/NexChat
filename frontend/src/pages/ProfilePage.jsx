import { Camera, Mail, User, Calendar, Shield } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";

function ProfilePage() {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be less than 5MB");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen pt-20 pb-10 relative overflow-hidden bg-base-100">

      {/* Background orbs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 bg-primary" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10 bg-secondary" />

      <div className="max-w-2xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-px rounded-full bg-primary/40" />
            <span className="text-xs tracking-[0.3em] uppercase font-bold text-primary/60">
              Account
            </span>
            <div className="w-8 h-px rounded-full bg-secondary/40" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-primary">
            Your Profile
          </h1>
          <p className="text-base-content/40 text-sm mt-1 tracking-wide">
            Manage your personal information
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl p-8 space-y-8 relative overflow-hidden bg-base-200 border border-base-300 shadow-xl">

          {/* Card top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-primary/30" />

          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative group">

              {/* Avatar glow ring */}
              <div className="absolute -inset-1 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-all duration-500 bg-primary" />

              <div className="relative">
                <img
                  src={selectedImage || authUser.profilePic || `https://api.dicebear.com/7.x/avataaars/svg?seed=${authUser.fullName}`}
                  alt="Profile"
                  className="size-32 rounded-full object-cover border-4 border-primary/30"
                />

                {/* Camera button */}
                <label
                  htmlFor="avatar-upload"
                  className={`
                    absolute bottom-0 right-0
                    bg-primary hover:bg-primary/80
                    p-2.5 rounded-full cursor-pointer
                    shadow-lg shadow-primary/30
                    transition-all duration-200
                    ${isUpdatingProfile ? "animate-pulse pointer-events-none opacity-50" : "hover:scale-110"}
                  `}
                >
                  <Camera className="w-4 h-4 text-primary-content" />
                  <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUpdatingProfile}
                  />
                </label>
              </div>
            </div>

            {/* Name under avatar */}
            <div className="text-center">
              <h2 className="font-bold text-lg text-base-content">{authUser.fullName}</h2>
              <p className="text-primary/50 text-xs tracking-widest uppercase mt-0.5">
                {isUpdatingProfile ? "⟳ Uploading photo..." : "✦ NexChat Member"}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-base-300" />

          {/* Info Fields */}
          <div className="space-y-4">

            {/* Full Name */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <User className="w-3.5 h-3.5 text-primary/60" />
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-base-content/40">
                  Full Name
                </span>
              </div>
              <div className="px-4 py-3 rounded-2xl text-base-content/80 text-sm font-medium bg-base-100 border border-base-300 hover:border-primary/30 transition-colors duration-200">
                {authUser.fullName}
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-3.5 h-3.5 text-secondary/60" />
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-base-content/40">
                  Email Address
                </span>
              </div>
              <div className="px-4 py-3 rounded-2xl text-base-content/80 text-sm font-medium bg-base-100 border border-base-300 hover:border-secondary/30 transition-colors duration-200">
                {authUser.email}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-base-300" />

          {/* Account Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-primary/60" />
              <h2 className="text-sm font-bold tracking-widest uppercase text-base-content/50">
                Account Information
              </h2>
            </div>

            <div className="rounded-2xl overflow-hidden border border-base-300">

              {/* Member Since */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-base-300 hover:bg-base-100 transition-colors duration-200">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-base-content/30" />
                  <span className="text-sm text-base-content/50">Member Since</span>
                </div>
                <span className="text-sm font-semibold text-primary">
                  {authUser.createdAt?.split("T")[0]}
                </span>
              </div>

              {/* Account Status */}
              <div className="flex items-center justify-between px-5 py-4 hover:bg-base-100 transition-colors duration-200">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-base-content/30" />
                  <span className="text-sm text-base-content/50">Account Status</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-semibold text-success">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card bottom glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-secondary/20" />
        </div>

        {/* Footer */}
        <p className="text-center text-base-content/20 text-xs tracking-widest uppercase mt-6">
          ✦ NexChat ✦
        </p>

      </div>
    </div>
  );
}

export default ProfilePage;