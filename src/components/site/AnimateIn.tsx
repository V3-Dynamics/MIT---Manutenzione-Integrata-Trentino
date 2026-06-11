import { useRef, useEffect, useState, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "in" | "scale" | "right";
  as?: ElementType;
}

const directionClasses = {
  up:    { hidden: "opacity-0 translate-y-7", visible: "opacity-100 translate-y-0" },
  in:    { hidden: "opacity-0",               visible: "opacity-100" },
  scale: { hidden: "opacity-0 scale-95",      visible: "opacity-100 scale-100" },
  right: { hidden: "opacity-0 -translate-x-6", visible: "opacity-100 translate-x-0" },
};

export function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
  as: Tag = "div",
}: AnimateInProps) {
  const ref = useRef<Element>(null);
  const [inView, setInView] = useState(false);
  const { hidden, visible } = directionClasses[direction];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        inView ? visible : hidden,
        className
      )}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
