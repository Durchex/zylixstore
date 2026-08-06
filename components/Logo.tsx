type LogoProps = {
  variant?: "grey" | "navy";
  className?: string;
};

export function Logo({ variant = "grey", className = "" }: LogoProps) {
  const color = variant === "navy" ? "text-[#1F2A44]" : "text-zylix-grey";
  return (
    <span className={`font-sans text-2xl font-semibold tracking-tight ${color} ${className}`}>
      ZylixStore
    </span>
  );
}
