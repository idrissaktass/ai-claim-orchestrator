import { useState } from 'react';
import { FileUp, Loader2, CheckCircle, ShieldCheck } from 'lucide-react';
import { ExplainWithAI } from '../ExplainWithAI';

export const DeductionNode = ({ data }: { data: any }) => {
  const [status, setStatus] = useState<'idle' | 'scanning' | 'verified'>('idle');

  const handleAIAnalysis = () => {
    setStatus('scanning');
    setTimeout(() => {
      setStatus('verified');
    }, 2500);
  };

  return (
    <div className="relative group p-8 glass-card rounded-[2.5rem] border-2 border-dashed border-slate-200 hover:border-blue-400 transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-black text-slate-900 tracking-tight">{data.title}</h3>
          <p className="text-xs text-orange-600 font-bold uppercase tracking-widest mt-1 italic">
            Action Required: {data.actionRequired} [cite: 85]
          </p>
        </div>
        <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl shadow-sm">
          <ShieldCheck size={24} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-tighter">Occupational Deduction</p>
          <p className="text-lg font-bold text-slate-700">{data.occupationalDeduction} [cite: 86]</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-tighter">Policy Deductible</p>
          <p className="text-lg font-bold text-slate-700">{data.policyDeductible} [cite: 88]</p>
        </div>
      </div>

      <div className="space-y-4">
        {status === 'idle' && (
          <button 
            onClick={handleAIAnalysis}
            className="w-full cursor-pointer py-5 bg-slate-900 text-white rounded-3xl font-black text-sm flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 group/btn"
          >
            <FileUp size={20} className="group-hover/btn:-translate-y-1 transition-transform" />
            Upload Certificate & Start AI Scan
          </button>
        )}

        {status === 'scanning' && (
          <div className="w-full py-5 bg-blue-50 text-blue-600 rounded-3xl font-black text-sm flex items-center justify-center gap-3 border border-blue-200">
            <Loader2 size={20} className="animate-spin" />
            AI Agent Validating Document...
          </div>
        )}

        {status === 'verified' && (
          <div className="w-full py-5 bg-green-50 text-green-700 rounded-3xl font-black text-sm flex items-center justify-center gap-3 border border-green-200 animate-in zoom-in duration-500">
            <CheckCircle size={20} className="animate-bounce" />
            AI Verified: Occupational Certificate Approved
          </div>
        )}
      </div>

      <ExplainWithAI title={data.title} />
    </div>
  );
};