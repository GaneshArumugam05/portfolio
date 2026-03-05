import { Download } from "lucide-react";

export const AnimatedBorderButton = ({ children, className = "" }) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center gap-2
      px-6 py-3 sm:px-8 sm:py-4
      text-sm sm:text-base font-medium
      rounded-full
      text-primary
      border border-primary/40
      hover:border-primary
      transition-all duration-300
      focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
      group ${className}`}
    >
      {/* Animated Border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 
             A 29,29 0 0 0 30,59 
             L 170,59 
             A 29,29 0 0 0 199,30 
             A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          className="group-hover:animate-borderDraw"
        />
      </svg>

      <span className="relative z-10 flex items-center gap-2">
        <Download size={18} />
        {children}
      </span>
    </button>
  );
};