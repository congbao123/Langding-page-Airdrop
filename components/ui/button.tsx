"use client";

import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
    children: React.ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
    const isPrimary = variant === "primary";

    return (
        <button
            className={`
        relative group overflow-hidden
        inline-flex items-center justify-center
        rounded-[29.469px]
        font-semibold
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        active:translate-y-0 active:shadow-md
        ${isPrimary
                    ? "bg-[#0CA8B9] text-black hover:shadow-[#0CA8B9]/40 border border-transparent"
                    : "bg-transparent text-white border border-[#0CA8B9] hover:bg-[#0CA8B9]/10 hover:shadow-[#0CA8B9]/20"
                }
        ${className}
      `}
            {...props}
        >
            {/* Shine effect overlay */}
            <span className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]" />

            {/* Subtle glow behind for outline button */}
            {!isPrimary && (
                <span className="absolute inset-0 rounded-[29.469px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(12,168,185,0.4)] pointer-events-none" />
            )}

            {/* Button content */}
            <span className="relative z-10 flex items-center w-full h-full justify-center">
                {children}
            </span>
        </button>
    );
}
