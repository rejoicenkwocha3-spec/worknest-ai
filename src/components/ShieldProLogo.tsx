"use client";

interface LogoProps {
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ShieldProLogo({ variant = "full", size = "md", className = "" }: LogoProps) {
  const iconSize = size === "sm" ? 28 : size === "lg" ? 48 : 36;
  const textClass = size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-lg";

  const icon = (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Eye outline */}
      <path
        d="M4 24 C4 24 12 10 24 10 C36 10 44 24 44 24 C44 24 36 38 24 38 C12 38 4 24 4 24Z"
        stroke="#D7FF00"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Outer ring */}
      <circle cx="24" cy="24" r="8" stroke="#D7FF00" strokeWidth="2.5" fill="none" />
      {/* Inner hexagon - lime */}
      <polygon
        points="24,17 29.2,20 29.2,26 24,29 18.8,26 18.8,20"
        fill="#D7FF00"
        opacity="0.9"
      />
      {/* Dark center dot */}
      <circle cx="24" cy="24" r="3" fill="#050505" />
      {/* Corner accents */}
      <path d="M4 24 L8 24" stroke="#D7FF00" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 24 L44 24" stroke="#D7FF00" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );

  if (variant === "icon") return <div className={className}>{icon}</div>;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {icon}
      <span className={`font-sora font-bold tracking-tight text-white ${textClass}`}>
        SHIELD <span className="text-[#D7FF00]">PRO AI</span>
      </span>
    </div>
  );
}
