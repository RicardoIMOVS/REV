import type { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionShellProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  children,
  className = "",
  ...sectionProps
}: SectionShellProps) {
  return (
    <section
      className={`scroll-mt-28 px-5 md:px-16 ${className}`}
      {...sectionProps}
    >
      <div className="mx-auto max-w-360">{children}</div>
    </section>
  );
}

type SwissGridProps = {
  children: ReactNode;
  className?: string;
};

export function SwissGrid({
  children,
  className = "",
}: SwissGridProps) {
  return (
    <div className={`grid grid-cols-12 gap-6 ${className}`}>{children}</div>
  );
}
