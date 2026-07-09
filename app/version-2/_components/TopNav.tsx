"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { labelClass } from "./layout";

const navLinks = [
  { href: "#filosofia", id: "filosofia", label: "Filosofia" },
  { href: "#id", id: "id", label: "I+D" },
  { href: "#procesos", id: "procesos", label: "Procesos" },
  { href: "#base", id: "base", label: "BĀSE" },
  { href: "#contacto", id: "contacto", label: "Contacto" },
];

const sectionIds = ["inicio", ...navLinks.map((link) => link.id)];

export function TopNav() {
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
    <header className="fixed top-0 z-50 w-full border-b border-[#192830]/10 bg-[#fbf9f9]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-360 items-center justify-between gap-6 px-6 py-5 md:px-20">
        <Link
          href="#inicio"
          className="brand-logo text-2xl text-[#192830]"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("#inicio");
          }}
        >
          <span className="brand-logo-name">Revolution Pharma</span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`${labelClass} border-b transition ${isActive
                    ? "border-[#192830] text-[#192830]"
                    : "border-transparent text-[#43474a] hover:text-[#192830]"
                  }`}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          className={`${labelClass} bg-[#192830] px-6 py-4 text-white transition hover:-translate-y-0.5 hover:bg-[#2f3e46]`}
          href="#contacto"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("#contacto");
          }}
        >
          Iniciar Proyecto
        </a>
      </nav>
    </header>
  );
}
