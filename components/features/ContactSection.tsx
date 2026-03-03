export function ContactSection() {
  const contacts = [
    {
      name: "Telegram",
      svg: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.961-.924c-.643-.204-.658-.643.135-.954l11.593-4.47c.537-.196 1.006.128.832.941z" />
        </svg>
      ),
      url: "https://t.me/wikaex",
    },
    {
      name: "Twitter",
      svg: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.974 6.807H2.306l7.644-8.741L2.25 2.25h6.826l4.722 6.237 5.446-6.237z" />
        </svg>
      ),
      url: "https://x.com/wikaex",
    },
    {
      name: "Discord",
      svg: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892.074.074 0 0 1-.008-.123c.126-.095.252-.195.372-.297a.074.074 0 0 1 .076-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .076.009c.12.102.246.203.372.298a.074.074 0 0 1-.006.123c-.598.368-1.22.678-1.871.891a.075.075 0 0 0-.037.098c.363.698.77 1.362 1.294 2.1a.074.074 0 0 0 .084.028a19.86 19.86 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.057c.5-4.761-.838-8.898-3.552-12.562a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156c0-1.193.964-2.157 2.157-2.157c1.193 0 2.156.964 2.157 2.157c0 1.19-.964 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156c0-1.193.964-2.157 2.157-2.157c1.193 0 2.157.964 2.157 2.157c0 1.19-.964 2.156-2.157 2.156z" />
        </svg>
      ),
      url: "https://discord.gg/wikaex",
    },
    {
      name: "GitHub",
      svg: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: "https://github.com/wikaex",
    },
    {
      name: "Email",
      svg: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="m2 6 10 7 10-7" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      url: "mailto:hello@wikaex.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Cyan Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(6,182,212,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Join Our Community
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Connect with us and stay updated with the latest ecosystem developments.
          </p>
        </div>

        {/* Cards - CHỈ thay đổi grid để responsive tốt hơn trên mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-12 md:mb-16">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target={contact.name !== "Email" ? "_blank" : undefined}
              rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group"
            >
              <div className="
                relative
                bg-[#0B0F14]
                border border-cyan-500/20
                rounded-2xl
                p-8
                flex flex-col items-center justify-center gap-4
                transition-all duration-300
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]
                hover:-translate-y-2
              ">
                
                {/* Icon */}
                <div className="
                  text-slate-300
                  group-hover:text-cyan-400
                  transition-colors duration-300
                ">
                  {contact.svg}
                </div>

                {/* Label */}
                <h3 className="text-white font-semibold tracking-wide">
                  {contact.name}
                </h3>

              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-500 mb-6">
            Choose your preferred platform to reach out.
          </p>
          <button className="
            px-10 py-3
            bg-cyan-500
            text-black
            font-semibold
            rounded-full
            transition-all duration-300
            hover:bg-cyan-400
            hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]
          ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}