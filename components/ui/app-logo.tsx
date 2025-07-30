import Image from "next/image";

export const AppLogo = ({
  showLarge = true,
  width = 160,
  height = 32,
  className = "w-40 h-8",
}: {
  showLarge?: boolean;
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <Image
      src={
        showLarge
          ? "/insight-relay-full-logo-dark.png"
          : "/insight-relay-logo.png"
      }
      width={width}
      height={height}
      className={className}
      alt="InsightRelay Logo"
    />
  );
};
