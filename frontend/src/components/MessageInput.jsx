import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";

function MessageInput() {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    try {
      await sendMessage({ text: text.trim(), image: imagePreview });
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error(error.response?.data?.message || "Failed to send");
    }
  };

  const canSend = text.trim() || imagePreview;

  return (
    <div className="p-3 border-t border-base-300 bg-base-100">

      {/* Image preview */}
      {imagePreview && (
        <div className="mb-3 px-1">
          <div className="relative inline-block group">

            {/* Glow */}
            <div className="absolute -inset-0.5 bg-primary/20 rounded-xl blur-sm" />

            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-xl border-2 border-primary/20"
              />

              {/* Remove button */}
              <button
                onClick={removeImage}
                type="button"
                className="absolute -top-2 -right-2 size-5 rounded-full bg-error text-error-content flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
              >
                <X className="size-3" />
              </button>

              {/* Image overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-xl transition-all duration-200" />
            </div>
          </div>
          <p className="text-[10px] text-base-content/30 mt-1.5 ml-1 tracking-wide">
            Image ready to send
          </p>
        </div>
      )}

      {/* Input row */}
      <form onSubmit={handleSendMessage} className="flex items-center gap-2">

        {/* Image button */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={`
            hidden sm:flex size-10 rounded-xl items-center justify-center shrink-0
            border transition-all duration-200
            ${imagePreview
              ? "bg-primary/10 border-primary/30 text-primary"
              : "bg-base-200 border-base-300 text-base-content/40 hover:bg-base-300 hover:text-primary hover:border-primary/30"
            }
          `}
        >
          <Image className="size-4" />
        </button>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />

        {/* Text input */}
        <div className="flex-1 relative group">
          <input
            type="text"
            className="w-full h-10 pl-4 pr-4 rounded-xl text-sm bg-base-200 text-base-content placeholder:text-base-content/30 outline-none transition-all duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={(e) => e.target.style.border = "1px solid rgba(var(--p), 0.4)"}
            onBlur={(e) => e.target.style.border = "1px solid rgba(255,255,255,0.08)"}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) handleSendMessage(e);
            }}
          />
        </div>

        {/* Send button */}
        <button
          type="submit"
          disabled={!canSend}
          className={`
            size-10 rounded-xl flex items-center justify-center shrink-0
            transition-all duration-200
            ${canSend
              ? "bg-primary text-primary-content shadow-md shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 active:translate-y-0"
              : "bg-base-200 text-base-content/20 border border-base-300 cursor-not-allowed"
            }
          `}
        >
          <Send className="size-4" />
        </button>
      </form>
    </div>
  );
}

export default MessageInput;