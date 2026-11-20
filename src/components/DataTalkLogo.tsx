interface Props { size?: number; className?: string }

export default function DataTalkLogo({ size = 36, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="dtGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#087BFF" />
        </linearGradient>
      </defs>
      {/* D shape */}
      <path
        d="M8 6 L8 34 L22 34 C30 34 34 28 34 20 C34 12 30 6 22 6 Z"
        stroke="url(#dtGrad)"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Layered data lines inside D */}
      <line x1="12" y1="16" x2="26" y2="16" stroke="url(#dtGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="20" x2="28" y2="20" stroke="url(#dtGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="24" x2="26" y2="24" stroke="url(#dtGrad)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
