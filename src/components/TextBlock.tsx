import { cn } from "@heroui/react";
import React from "react";


interface TextBlockProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "base" | "lg" | "xl";
  center?: boolean;
}

const TextBlock: React.FC<TextBlockProps> = ({
  children,
  className,
  size = "base",
  center = false,
}) => {
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <p
      className={cn(
        sizeClasses[size],
        center && "text-center",
        "text-muted-foreground leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};

export default TextBlock;
