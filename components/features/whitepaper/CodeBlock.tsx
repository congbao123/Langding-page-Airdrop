export default function CodeBlock({ code }: { code: string }) {
  return (
    <div className="bg-slate-900 text-white text-sm rounded-xl p-4 overflow-x-auto">
      <code>{code}</code>
    </div>
  );
}