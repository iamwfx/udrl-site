"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#courses", label: "COURSES" },
  { href: "#publications", label: "PUBLICATIONS" },
  { href: "#news", label: "NEWS" },
  { href: "#people", label: "PEOPLE" },
  { href: "#contact", label: "CONTACT" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-t-2 border-b-2 border-black">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/urbanDRL_logo.svg"
            alt="Urban Data Research Lab"
            width={140}
            height={56}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className={`text-sm font-bold tracking-wider transition-colors ${
                isHome && active === href.replace("#", "")
                  ? "text-udrl-blue"
                  : "text-udrl-dark hover:text-udrl-blue"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-udrl-dark transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-udrl-dark transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-udrl-dark transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-udrl-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="text-left text-sm font-semibold tracking-wider text-udrl-dark hover:text-udrl-blue"
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
