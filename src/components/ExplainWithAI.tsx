import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export const ExplainWithAI = ({ title }: { title: string }) => {
  const [isExplaining, setIsExplaining] = useState(false);

  return (
    <div className="mt-4 pt-4 border-t border-slate-100/50">
      <button 
        onClick={() => {
          setIsExplaining(true);
          setTimeout(() => setIsExplaining(false), 3500);
        }}
        className="flex items-center gap-2 cursor-pointer text-[10px] font-black text-slate-400 hover:text-blue-600 uppercase tracking-[0.15em] transition-all group"
      >
        <Sparkles size={12} className={isExplaining ? "animate-spin text-blue-500" : "group-hover:rotate-12 transition-transform"} />
        {isExplaining ? "AI Analyzes Terms..." : "Explain with AI"}
      </button>
      
      {isExplaining && (
        <div className="mt-3 p-4 bg-blue-50/50 backdrop-blur-sm rounded-2xl border border-blue-100 text-[11px] text-blue-800 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-500">
          <span className="font-black uppercase tracking-tighter block mb-1">AI Insights</span>
          This step focuses on **{title}**. Our AI agent verifies the technical data and insurance terms to ensure the process aligns with your policy coverage and local regulations. 
        </div>
      )}
    </div>
  );
};