import Image from "next/image";

interface Plan9LogoProps {
  size?: number;
  className?: string;
}

export default function Plan9Logo({ size = 36, className = "" }: Plan9LogoProps) {
  return (
    <Image
      src="/plan9-logo.jpg"
      alt="PLAN9 AI"
      width={size}
      height={size}
      className={`rounded-lg object-contain ${className}`}
      priority
    />
  );
}
