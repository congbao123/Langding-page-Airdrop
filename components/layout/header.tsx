'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

import logo from '@/public/Img/header/logo.png';
import textlogo from '@/public/Img/header/logo.svg';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="
          bg-[#0B0E13]/90
          backdrop-blur-xl
          border border-cyan-500/10
          rounded-full
          px-6 md:px-8
          py-3
          flex items-center justify-between
          shadow-[0_0_30px_rgba(6,182,212,0.08)]
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
          <nav className="hidden md:flex items-center gap-8 ml-102">
            {['About', 'Roadmap', 'Whitepaper', 'Features', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Desktop Button */}
          <button className="
            hidden md:inline-flex
            px-6 py-2
            bg-cyan-400
            text-black
            font-semibold
            rounded-full
            hover:bg-cyan-300
            transition-all duration-300
            hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]
          ">
            Launch App
          </button>

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
            bg-[#0B0E13]/95
            backdrop-blur-xl
            border border-cyan-500/10
            rounded-2xl
            p-6
            shadow-[0_0_40px_rgba(6,182,212,0.08)]
            animate-in fade-in slide-in-from-top-4 duration-300
          ">
            <nav className="flex flex-col gap-6 text-center">
              {['About', 'Roadmap', 'Whitepaper', 'Features', 'Contact'].map(
                (item, idx) => (
                  <a
                    key={item}
                   href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`text-slate-300 hover:text-cyan-400 transition py-2 ${idx < 4 ? 'border-b border-gray-700' : ''}`}
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            <button className="
              mt-6
              w-full
              py-3
              bg-cyan-400
              text-black
              font-semibold
              rounded-full
              hover:bg-cyan-300
              transition
            ">
              Launch App
            </button>
          </div>
        )}
      </div>
    </header>
  );
}