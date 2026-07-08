"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#manifiesto", id: "manifiesto", label: "Manifiesto" },
  { href: "#ciencia", id: "ciencia", label: "Ciencia" },
  { href: "#proceso", id: "proceso", label: "Proceso" },
  { href: "#colecciones", id: "colecciones", label: "Servicios" },
  { href: "#base", id: "base", label: "BASE" },
  { href: "#contacto", id: "contacto", label: "Contacto" },
];

const sectionIds = ["inicio", ...navItems.map((item) => item.id)];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    const headerOffset = 96;
    const top =
      section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ behavior: "smooth", top });
    window.history.replaceState(null, "", href);
    setActiveSection(id);
  };

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const firstVisible = visibleEntries[0]?.target.id;

        if (firstVisible) {
          setActiveSection(firstVisible);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#c4c7c7]/20 bg-[#f6fafd]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-360 items-center justify-between gap-6 px-5 py-5 md:px-16">
        <Link
          className="brand-logo text-2xl text-black"
          href="#inicio"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("#inicio");
          }}
        >
          <span className="brand-logo-name">Revolution Pharma</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
            <a
              key={item.id}
              aria-current={isActive ? "page" : undefined}
              className={`border-b text-sm font-bold uppercase tracking-widest transition-colors ${
                isActive
                  ? "border-black text-black"
                  : "text-[#444748] hover:text-black"
              }`}
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.label}
            </a>
          );
          })}
        </div>

        <a
          className="bg-black px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#2c3134]"
          href="#inicio"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("#inicio");
          }}
        >
          Tienda
        </a>
      </div>
    </nav>
  );
}
