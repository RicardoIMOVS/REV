"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactCtas } from "../_data/ctas";
import { homeNavItems } from "../_data/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#c4c7c7]/20 bg-[#f6fafd]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-360 items-center justify-between gap-6 px-5 py-5 md:px-16">
        <Link
          className="brand-logo shrink-0 text-2xl text-black"
          href="/version-1"
        >
          <span className="brand-logo-name">Revolution Pharma</span>
        </Link>

        <div className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {homeNavItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/version-1" && pathname.startsWith(item.href));

            return (
            <Link
              key={item.label}
              aria-current={isActive ? "page" : undefined}
              className={`border-b text-xs font-bold uppercase tracking-widest transition-colors xl:text-sm ${
                isActive
                  ? "border-black text-black"
                  : "text-[#444748] hover:text-black"
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          );
          })}
        </div>

        <Link
          className="shrink-0 bg-black px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#2c3134]"
          href={contactCtas.primary.href}
        >
          Hablemos
        </Link>
      </div>
    </nav>
  );
}
