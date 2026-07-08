"use client";

import { useEffect, useRef, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.visible = "true";
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.1 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`translate-y-8 opacity-0 transition-all duration-1000 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
