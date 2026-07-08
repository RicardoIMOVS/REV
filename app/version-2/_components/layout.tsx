import type { ComponentPropsWithoutRef, ReactNode } from "react";

type LayoutProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  children,
  className = "",
  ...sectionProps
}: LayoutProps) {
  return (
    <section
      className={`scroll-mt-28 px-6 md:px-20 ${className}`}
      {...sectionProps}
    >
      <div className="mx-auto max-w-360">{children}</div>
    </section>
  );
}

type GridProps = {
  children: ReactNode;
  className?: string;
};

export function Grid({ children, className = "" }: GridProps) {
  return <div className={`grid grid-cols-12 gap-8 ${className}`}>{children}</div>;
}

export const labelClass =
  "text-xs font-semibold uppercase tracking-[0.12em]";
