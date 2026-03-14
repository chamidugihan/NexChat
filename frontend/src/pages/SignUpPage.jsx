import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, MessageSquare, User, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email");
    if (!formData.password.trim()) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 relative overflow-hidden">

        {/* Background orbs */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md space-y-8 relative z-10">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-3 group">

              {/* Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-md group-hover:bg-primary/30 transition-all duration-500" />
                <div className="relative size-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <MessageSquare className="size-7 text-primary" />
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-bold mt-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Create Account
                </h1>
                <p className="text-base-content/50 text-sm mt-1 tracking-wide">
                  Get started with your free account
                </p>
              </div>

              {/* Decorative line */}
              <div className="flex items-center gap-2 mt-1">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/40 rounded-full" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/40 rounded-full" />
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div className="form-control">
              <label className="label pb-1.5">
                <span className="label-text font-semibold text-xs tracking-widest uppercase text-base-content/60">
                  Full Name
                </span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <User className="size-4 text-base-content/30 group-focus-within:text-primary transition-colors duration-200" />
                </div>
                <input
                  type="text"
                  className="input w-full pl-11 bg-base-200/50 focus:bg-base-100 rounded-xl transition-all duration-200 outline-none"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  onFocus={(e) => (e.target.style.border = "1px solid rgba(var(--p), 0.5)")}
                  onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.1)")}
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label pb-1.5">
                <span className="label-text font-semibold text-xs tracking-widest uppercase text-base-content/60">
                  Email Address
                </span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Mail className="size-4 text-base-content/30 group-focus-within:text-primary transition-colors duration-200" />
                </div>
                <input
                  type="email"
                  className="input w-full pl-11 bg-base-200/50 focus:bg-base-100 rounded-xl transition-all duration-200 outline-none"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={(e) => (e.target.style.border = "1px solid rgba(var(--p), 0.5)")}
                  onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.1)")}
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label pb-1.5">
                <span className="label-text font-semibold text-xs tracking-widest uppercase text-base-content/60">
                  Password
                </span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Lock className="size-4 text-base-content/30 group-focus-within:text-primary transition-colors duration-200" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input w-full pl-11 bg-base-200/50 focus:bg-base-100 rounded-xl transition-all duration-200 outline-none"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  onFocus={(e) => (e.target.style.border = "1px solid rgba(var(--p), 0.5)")}
                  onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.1)")}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-base-content/30 hover:text-primary transition-colors duration-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-base-content/10 to-transparent" />

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary w-full rounded-xl tracking-wider uppercase text-xs font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  <User className="size-4" />
                  Create Account
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <div className="w-1 h-1 rounded-full bg-base-content/20 animate-bounce [animation-delay:0ms]" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/30 animate-bounce [animation-delay:150ms]" />
              <div className="w-1 h-1 rounded-full bg-base-content/20 animate-bounce [animation-delay:300ms]" />
            </div>
            <p className="text-base-content/40 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-semibold hover:text-primary/80 underline underline-offset-2 transition-colors duration-200"
              >
                Sign in
              </Link>
            </p>
          </div>

        </div>
      </div>

      {/* Right Side */}
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones"
      />
    </div>
  );
}

export default SignUpPage;