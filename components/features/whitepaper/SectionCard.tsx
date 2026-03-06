import { motion } from "framer-motion";

interface Props {
  number: string;
  title: string;
  children: React.ReactNode;
}

export default function SectionCard({ number, title, children }: Props) {
  return (
    <motion.div
      className="group relative bg-white rounded-3xl p-6 md:p-12 shadow-sm mb-8 border border-gray-100 hover:border-gray-200 transition-all duration-300"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Vertical editorial line – show on md+ */}
      <div className="hidden md:block absolute left-0 top-12 bottom-12 w-[3px]" />

      <div className="pl-0 md:pl-12 flex flex-col md:flex-row gap-6 md:gap-10">

        {/* Mobile badge */}
        <div className="md:hidden mb-2">
          <span className="inline-block bg-cyan-600 text-white text-sm px-3 py-1 rounded-md font-semibold">
            {number}
          </span>
        </div>

        {/* Big editorial number for larger screens */}
        <div className="hidden md:flex flex-shrink-0 -mt-4 md:-mt-6">
          <motion.span
            className="block text-[6rem] lg:text-[8rem] font-black text-cyan-100 leading-none select-none group-hover:text-cyan-500 transition-colors"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            {number}
          </motion.span>
        </div>

        {/* Main content */}
        <div className="flex-1 pt-2 md:pt-4">
          <motion.h3
            className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4 md:mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            {title}
          </motion.h3>

          <motion.div
            className="text-gray-600 text-sm md:text-[15.5px] leading-relaxed space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {children}
          </motion.div>
        </div>
      </div>

      {/* Subtle divider */}
      <div className="mt-8 md:mt-14 h-px bg-gray-100 group-hover:bg-gray-200 transition-colors" />
    </motion.div>
  );
}