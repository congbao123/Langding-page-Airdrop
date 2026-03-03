
// import Image from 'next/image';
// import textlogo from '@/public/Img/header/logo.svg'; // giả sử logo là text-based

export function Hero() {
  return (
    <section  id="about" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0a011f] via-[#140329] to-[#000000] overflow-hidden">
      {/* Background subtle effect (optional: particles / grid nếu dùng library) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.08),transparent_40%)]" />

      {/* Overlay tối để text rõ hơn */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6 md:px-12 max-w-7xl w-full mt-10">
        {/* Mainnet badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full border border-cyan-500/40 bg-black/40 backdrop-blur-sm text-cyan-300 text-sm font-medium">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Native Blockchain Mainnet – Live
        </div>

     

        {/* Headline + subheadline */}
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Wika<span className="text-cyan-400">EX</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
         A controlled, fixed-supply native blockchain asset designed for  
          <span className="block mt-2 font-medium text-white">
            scalability and transparency. No inflation. No hidden minting. Complete monetary predictability. 
          </span>
        </p>

        {/* Stats – đẹp hơn, thêm icon nhẹ nếu muốn */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 max-w-5xl mx-auto mb-16">
          {[
            { value: "1,000,000,000", label: "Total Supply" },
            { value: "SHA-256", label: "Algorithm" },
            { value: "100%", label: "Decentralized" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-cyan-400 tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm uppercase font-semibold text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons – premium look */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
          
          <a href="#whitepaper"
           className="px-10 py-4 bg-transparent border-2 border-white/60 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-white transition-all duration-300">
            Read Whitepaper
          </a>

          <a
            href="#contact"
            className="px-10 py-4 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-full hover:bg-cyan-950/30 hover:border-cyan-400 transition-all duration-300"
          >
            Connect With Us
          </a>
        </div>
      </div>

      {/* Optional: subtle scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        ↓ Scroll to explore
      </div>
    </section>
  );
}