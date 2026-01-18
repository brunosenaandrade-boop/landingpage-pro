"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Funcionalidades" },
  { href: "#apps", label: "Apps" },
  { href: "#pricing", label: "Investimento" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Seguro Pneu Pro"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="font-semibold hidden sm:block">Seguro Pneu Pro</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5548998649898?text=Olá!%20Tenho%20interesse%20no%20Sistema%20Seguro%20Pneu%20Pro"
              target="_blank"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 rounded-full text-sm font-medium transition-colors"
            >
              Entrar em contato
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-zinc-950 border-b border-zinc-800"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5548998649898?text=Olá!%20Tenho%20interesse%20no%20Sistema%20Seguro%20Pneu%20Pro"
              target="_blank"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-red-500 hover:bg-red-600 rounded-full text-sm font-medium transition-colors mt-2"
            >
              Entrar em contato
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
