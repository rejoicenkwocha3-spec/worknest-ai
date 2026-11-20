interface Plan9LogoProps {
  size?: number;
  className?: string;
}

export default function Plan9Logo({ size = 36, className = "" }: Plan9LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="36" height="36" rx="8" fill="#050505" />
      <path
        d="M8 10 L8 26 L13 26 L13 20 L20 20 C23.3 20 26 17.3 26 14 C26 10.7 23.3 8 20 8 L8 8 Z"
        fill="url(#p9grad1)"
        opacity="0.95"
      />
      <path
        d="M8 10 L8 26 L13 26 L13 20 L20 20 C23.3 20 26 17.3 26 14 C26 10.7 23.3 8 20 8 L8 8 Z"
        stroke="none"
        fill="url(#p9grad1)"
      />
      <path
        d="M18 20 L24 28 L29 28 L23 20 Z"
        fill="url(#p9grad2)"
      />
      <defs>
        <linearGradient id="p9grad1" x1="8" y1="8" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2D7EFF" />
          <stop offset="100%" stopColor="#0ECFCF" />
        </linearGradient>
        <linearGradient id="p9grad2" x1="18" y1="20" x2="29" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0ECFCF" />
          <stop offset="100%" stopColor="#2ECC71" />
        </linearGradient>
      </defs>
    </svg>
  );
}
