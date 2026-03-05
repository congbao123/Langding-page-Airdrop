export const SupplySection = () => {
  const distribution = [
    {
      label: "Airdrop & Community",
      value: "50%",
      percent: 50,
      color: "#22d3ee",
      glow: "rgba(34,211,238,0.35)",
      icon: "◈",
    },
    {
      label: "Development & Operations",
      value: "20%",
      percent: 20,
      color: "#818cf8",
      glow: "rgba(129,140,248,0.35)",
      icon: "⬡",
    },
    {
      label: "Ecosystem Incentives",
      value: "15%",
      percent: 15,
      color: "#34d399",
      glow: "rgba(52,211,153,0.35)",
      icon: "◇",
    },
    {
      label: "Team & Advisors",
      value: "10%",
      percent: 10,
      color: "#f472b6",
      glow: "rgba(244,114,182,0.35)",
      icon: "△",
    },
    {
      label: "Liquidity & Partnerships",
      value: "5%",
      percent: 5,
      color: "#fb923c",
      glow: "rgba(251,146,60,0.35)",
      icon: "○",
    },
  ];

  // SVG donut chart
  const radius = 80;
  const cx = 110;
  const cy = 110;
  const stroke = 22;
  const circumference = 2 * Math.PI * radius;

  let cumulativePercent = 0;
  const segments = distribution.map((item) => {
    const startAngle = cumulativePercent / 100;
    cumulativePercent += item.percent;
    const endAngle = cumulativePercent / 100;
    const dashLength = (endAngle - startAngle) * circumference;
    const gapLength = circumference - dashLength;
    const rotation = startAngle * 360 - 90;
    return { ...item, dashLength, gapLength, rotation };
  });

  return (
    <section
      id="supply"
      className="relative bg-[#0A0F1C] py-24 px-6 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @keyframes fillBar {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spinDonut {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -502; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .dist-card {
          animation: fadeSlideUp 0.5s ease both;
        }
        .dist-card:nth-child(1) { animation-delay: 0.05s; }
        .dist-card:nth-child(2) { animation-delay: 0.12s; }
        .dist-card:nth-child(3) { animation-delay: 0.19s; }
        .dist-card:nth-child(4) { animation-delay: 0.26s; }
        .dist-card:nth-child(5) { animation-delay: 0.33s; }

        .bar-fill {
          animation: fillBar 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 0.4s;
        }
        .dist-card:hover .bar-fill {
          filter: brightness(1.2);
        }
        .dist-card:hover {
          transform: translateY(-3px);
        }
        .dist-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .segment-pulse {
          animation: pulseGlow 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* bg glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* header */}
        <div className="text-center mb-20">
          <span
            className="text-cyan-400 text-sm tracking-[0.3em] uppercase font-medium"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Tokenomics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Token Supply
          </h2>
          <div className="mt-6 h-0.5 w-28 mx-auto bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A fixed, finite supply designed to reward early participants and
            ensure long‑term sustainability.
          </p>
        </div>

        {/* main layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* LEFT — donut + total */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6">
            {/* donut */}
            <div className="relative" style={{ width: 220, height: 220 }}>
              <svg width="220" height="220" viewBox="0 0 220 220">
                {/* track */}
                <circle
                  cx={cx} cy={cy} r={radius}
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth={stroke}
                />
                {segments.map((seg, i) => (
                  <circle
                    key={i}
                    cx={cx} cy={cy} r={radius}
                    fill="none"
                    stroke={seg.color}
                    strokeWidth={stroke}
                    strokeDasharray={`${seg.dashLength - 3} ${seg.gapLength + 3}`}
                    strokeDashoffset={0}
                    transform={`rotate(${seg.rotation} ${cx} ${cy})`}
                    strokeLinecap="round"
                    style={{ filter: `drop-shadow(0 0 6px ${seg.glow})` }}
                    className="segment-pulse"
                  />
                ))}
              </svg>
              {/* center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className="text-white text-2xl font-bold"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  1B
                </span>
                <span className="text-gray-500 text-xs tracking-widest mt-1 uppercase">
                  WIKA
                </span>
              </div>
            </div>

            {/* total supply pill */}
            <div
              className="rounded-2xl px-8 py-5 text-center"
              style={{
                background: "linear-gradient(135deg, #111827 0%, #0f172a 100%)",
                border: "1px solid rgba(34,211,238,0.2)",
                boxShadow: "0 0 40px rgba(34,211,238,0.08)",
              }}
            >
              <p className="text-gray-500 text-xs tracking-[0.2em] uppercase mb-1"
                style={{ fontFamily: "'Space Mono', monospace" }}>
                Total Supply
              </p>
              <p
                className="text-white font-bold text-2xl"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                1,000,000,000
              </p>
              <p className="text-cyan-400 text-sm font-medium mt-1">WIKA</p>
            </div>
          </div>

          {/* RIGHT — allocation bars */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            {distribution.map((item, idx) => (
              <div
                key={idx}
                className="dist-card rounded-2xl p-5"
                style={{
                  background: "linear-gradient(135deg, #0f172a 0%, #111827 100%)",
                  border: `1px solid ${item.color}22`,
                  boxShadow: `0 4px 24px ${item.glow}18`,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* icon dot */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{
                        background: `${item.color}18`,
                        color: item.color,
                        border: `1px solid ${item.color}40`,
                      }}
                    >
                      {item.icon}
                    </div>
                    <span className="text-white font-medium text-sm">
                      {item.label}
                    </span>
                  </div>
                  <span
                    className="text-lg font-bold"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      color: item.color,
                    }}
                  >
                    {item.value}
                  </span>
                </div>

                {/* bar track */}
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: `${item.color}18` }}
                >
                  <div
                    className="bar-fill h-full rounded-full"
                    style={{
                      "--target-width": `${item.percent}%`,
                      width: `${item.percent}%`,
                      background: `linear-gradient(90deg, ${item.color}88, ${item.color})`,
                      boxShadow: `0 0 8px ${item.glow}`,
                    } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};