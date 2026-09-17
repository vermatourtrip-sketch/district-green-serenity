import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up" | "blur-in";
  as?: "div" | "section" | "article" | "li" | "span" | "figure";
};

const variantClass: Record<NonNullable<RevealProps["variant"]>, string> = {
  "fade-up": "reveal-fade-up",
  "fade-in": "reveal-fade-in",
  "slide-left": "reveal-slide-left",
  "slide-right": "reveal-slide-right",
  "scale-up": "reveal-scale-up",
  "blur-in": "reveal-blur-in",
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn(variantClass[variant], visible && "reveal-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
