'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

import logo from '@/public/Img/header/logo.png';
import textlogo from '@/public/Img/header/logo.svg';
import { Button } from "@/components/ui/button";
import { getFirebaseAnalytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";

async function trackClick(label: string) {
  const analytics = await getFirebaseAnalytics();
  if (analytics) {
    logEvent(analytics, "claim_airdrop_click", {
      button_label: label,
      page_section: "header",
    });
  }
}
const navItems = ['About', 'Supply', 'Roadmap', 'Whitepaper', 'Contact'];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="
          bg-[#0a0a0f]/40
          backdrop-blur-xl
          border border-white/10
          rounded-full
          px-6 md:px-8
          py-3
          flex items-center justify-between
          shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.15),0_0_20px_rgba(12,168,185,0.1)]
        ">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 flex items-center justify-center shrink-0">
              <Image src={logo} alt="Logo" width={40} height={40} />
            </div>
            <Image
              src={textlogo}
              alt="Logo Text"
              width={90}
              height={20}
              className="h-5 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 flex-1 justify-center px-6 lg:px-0">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative text-slate-300 hover:text-white transition-all duration-300 text-sm lg:text-base font-medium px-2 py-1"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                  {item}
                </span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 blur-[1px] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 rounded-full" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-4/5 opacity-0 group-hover:opacity-100 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <a href="https://t.me/Wika_EX" target="_blank" rel="noopener noreferrer" onClick={() => trackClick("Claim Airdrop - Header Desktop")}>
              <Button className="inline-flex px-6 py-2 text-[16px]">
                Claim Airdrop
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyan-400"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="
            md:hidden
            mt-4
            bg-[#0a0a0f]/40
            backdrop-blur-xl
            border border-white/10
            rounded-2xl
            p-6
            shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.15),0_0_20px_rgba(12,168,185,0.1)]
            animate-in fade-in slide-in-from-top-4 duration-300
          ">
            <nav className="flex flex-col gap-6 text-center">
              {navItems.map((item, idx) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={`group relative text-slate-300 hover:text-white transition-all duration-300 py-2 ${
                    idx < navItems.length - 1 ? 'border-b border-white/5' : ''
                  }`}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                    {item}
                  </span>
                  <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all duration-300 rounded-lg blur-md" />
                </a>
              ))}
            </nav>

            <a href="https://t.me/Wika_EX" target="_blank" rel="noopener noreferrer" className="block" onClick={() => trackClick("Claim Airdrop - Header Mobile")}>
              <Button className="mt-6 w-full py-3 text-[16px]">
                Claim Airdrop
              </Button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}