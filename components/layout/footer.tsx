export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Whitepaper", href: "#whitepaper" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "GitHub", href: "https://github.com/wikaex" },
      { label: "Status", href: "/status" },   
    ],
    community: [
      { label: "Telegram", href: "https://t.me/wikaex" },
      { label: "Twitter", href: "https://x.com/wikaex" },
      { label: "Discord", href: "https://discord.gg/wikaex" },
      { label: "Contact", href: "mailto:hello@wikaex.com" },
    ],
    resources: [
      { label: "Documentation", href: "/docs" },
      { label: "API", href: "/api" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0a011f] to-[#000000] border-t border-white/5">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,255,0.03),transparent_70%)]" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <h2 className="text-2xl font-black text-white">
                  Wika<span className="text-cyan-400">EX</span>
                </h2>
                <p className="text-sm text-gray-400 mt-2">
                  Native blockchain asset for the future.
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                {[
                  { icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.961-.924c-.643-.204-.658-.643.135-.954l11.593-4.47c.537-.196 1.006.128.832.941z" />
        </svg>, 
                    url: "https://t.me/wikaex", label: "Telegram" },
                  { icon: "𝕏", url: "https://x.com/wikaex", label: "Twitter" },
                  { icon: <svg className="w-4 h4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892.074.074 0 0 1-.008-.123c.126-.095.252-.195.372-.297a.074.074 0 0 1 .076-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .076.009c.12.102.246.203.372.298a.074.074 0 0 1-.006.123c-.598.368-1.22.678-1.871.891a.075.075 0 0 0-.037.098c.363.698.77 1.362 1.294 2.1a.074.074 0 0 0 .084.028a19.86 19.86 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.057c.5-4.761-.838-8.898-3.552-12.562a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156c0-1.193.964-2.157 2.157-2.157c1.193 0 2.156.964 2.157 2.157c0 1.19-.964 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156c0-1.193.964-2.157 2.157-2.157c1.193 0 2.157.964 2.157 2.157c0 1.19-.964 2.156-2.157 2.156z" />
        </svg> ,
                     url: "https://discord.gg/wikaex", label: "Discord" },
                  { icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>,
                     url: "https://github.com/wikaex", label: "GitHub" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-900/30 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                {links.product.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Links */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Community
              </h3>
              <ul className="space-y-3">
                {links.community.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {links.resources.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {links.legal.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5" />

          {/* Bottom Section */}
          <div className="pt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div className="text-sm text-gray-500">
              <p>
                © {currentYear} Wikaex Network. All rights reserved.
              </p>
              <p className="mt-1">
                Designed for scalability and transparency.
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              {links.legal.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>
    </footer>
  );
}
