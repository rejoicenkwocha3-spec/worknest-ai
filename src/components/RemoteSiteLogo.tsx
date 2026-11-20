"use client";

interface RemoteSiteLogoProps {
  size?: number;
  className?: string;
}

export default function RemoteSiteLogo({ size = 36, className = "" }: RemoteSiteLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background square with rounded corners */}
      <rect width="36" height="36" rx="8" fill="#0039FF" />
      {/* R letterform with location-pin notch */}
      <path
        d="M9 27V9h9.5c2.2 0 4 .6 5.2 1.8 1.1 1.1 1.7 2.6 1.7 4.4 0 1.5-.4 2.8-1.2 3.7-.7.9-1.7 1.5-3 1.8l5.1 6.3h-3.6l-4.6-5.8H12v5.8H9zm3-8.4h6.2c1.3 0 2.2-.3 2.8-.9.6-.6.9-1.4.9-2.4s-.3-1.8-.9-2.3c-.6-.6-1.5-.9-2.8-.9H12v6.5z"
        fill="white"
      />
      {/* Location pin dot accent */}
      <circle cx="26.5" cy="11.5" r="2.5" fill="#EAF0FF" opacity="0.9" />
    </svg>
  );
}
