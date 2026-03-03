// interface Props {
//   number: string;
//   title: string;
//   children: React.ReactNode;
// }

// export default function SectionCard({ number, title, children }: Props) {
//   return (
//     <div className="bg-white rounded-2xl p-10 shadow-sm mb-10 border-l-4 border-cyan-600">
//       <div className="flex items-center gap-3 mb-6">
//         <span className="bg-cyan-600 text-white text-xs px-3 py-1 rounded-lg font-semibold">
//           {number}
//         </span>

//         <h3 className="text-xl font-semibold text-cyan-600">
//           {title}
//         </h3>
//       </div>

//       <div className="text-gray-600 text-sm leading-relaxed space-y-4">
//         {children}
//       </div>
//     </div>
//   );
// }
interface Props {
  number: string;
  title: string;
  children: React.ReactNode;
}

export default function SectionCard({ number, title, children }: Props) {
  return (
    <div className="group relative bg-white rounded-3xl p-6 md:p-12 shadow-sm mb-8 border border-gray-100 hover:border-gray-200 transition-all duration-300">

      {/* Vertical editorial line – show on md+ */}
      <div className="hidden md:block absolute left-0 top-12 bottom-12 w-[3px] bg-gradient-to-b from-cyan-500 to-transparent" />

      <div className="pl-0 md:pl-12 flex flex-col md:flex-row gap-6 md:gap-10">

        {/* Mobile badge: show small numbered badge on small screens */}
        <div className="md:hidden mb-2">
          <span className="inline-block bg-cyan-600 text-white text-sm px-3 py-1 rounded-md font-semibold">
            {number}
          </span>
        </div>

        {/* Big editorial number for larger screens */}
        <div className="hidden md:flex flex-shrink-0 -mt-4 md:-mt-6">
          <span className="block text-[6rem] lg:text-[8rem] font-black text-cyan-100 leading-none select-none group-hover:text-cyan-500 transition-colors">
            {number}
          </span>
        </div>

        {/* Main content */}
        <div className="flex-1 pt-2 md:pt-4">
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4 md:mb-8">
            {title}
          </h3>

          <div className="text-gray-600 text-sm md:text-[15.5px] leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </div>

      {/* Subtle divider */}
      <div className="mt-8 md:mt-14 h-px bg-gray-100 group-hover:bg-gray-200 transition-colors" />
    </div>
  );
}