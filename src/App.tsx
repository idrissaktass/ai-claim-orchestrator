import { useState } from 'react';
import { useClaimStore } from './store/useClaimStore';
import { getComponentForNode } from './components/NodeRegistry';
import { ShieldCheck, Timer, ChevronRight, Activity, Plus, X, Send } from 'lucide-react';
import { DashboardLayout } from './components/DashboardLayout';

const QuickNoteInput = ({ onSave, onCancel }: { onSave: (val: string) => void; onCancel: () => void }) => {
  const [val, setVal] = useState("");

  return (
    <div className="mt-4 ml-4 md:ml-12 p-6 bg-white rounded-4xl border-2 border-amber-100 shadow-2xl shadow-amber-100/30 animate-in fade-in zoom-in duration-300 relative z-40">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Write Your Note</span>
        <button onClick={onCancel} className="text-slate-400 cursor-pointer hover:text-red-500 transition-colors">
          <X size={16} />
        </button>
      </div>
      <textarea
        autoFocus
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Enter your manual insight or additional information here..."
        className="w-full bg-amber-50/30 border-none rounded-2xl p-4 text-sm text-slate-700 focus:ring-2 focus:ring-amber-400 outline-none min-h-25 resize-none transition-all"
      />
      <button
        disabled={!val.trim()}
        onClick={() => onSave(val)}
        className="mt-4 cursor-pointer w-full py-4 bg-amber-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-200"
      >
        <Send size={14} /> Add Note to Step
      </button>
    </div>
  );
};

function App() {
  const { claim, addNote } = useClaimStore();
  const [activeInputIndex, setActiveInputIndex] = useState<number | null>(null);

  const pendingAction = claim.processDetails.find(d => d.status === "Pending" && d.actionRequired);

const Header = (
  <div className="flex justify-between items-center w-full">
    <div className="flex items-center gap-3 sm:gap-4 group">
      <div className="bg-blue-600 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-lg shadow-blue-200 transition-all group-hover:rotate-6 group-hover:scale-110">
        <Activity className="text-white" size={22} />
      </div>
      <div>
        <h1 className="text-xl font-black text-slate-900 tracking-tighter leading-none">ClaimFlow</h1>
        <p className="text-[9px] text-blue-500 font-bold uppercase tracking-widest mt-1">AI Intelligence</p>
      </div>
    </div>

    <div className="flex flex-col items-end">
      <p className="text-[9px] text-slate-400 font-black uppercase tracking-tighter italic leading-none mb-1">Case ID</p>
      <div className="bg-slate-50 px-2 sm:px-3 py-1 rounded-lg border border-slate-100 shadow-sm">
        <p className="text-[12px] sm:text-sm font-mono font-black text-slate-700">#{claim.fileNo}</p>
      </div>
    </div>
  </div>
);

  const Sidebar = (
    <div className="space-y-8">
      <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/40 border border-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mr-20 -mt-20 opacity-60 transition-transform group-hover:scale-125 duration-700" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-sm">
            <Timer size={12} /> Real-Time Engine
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">Current Status</p>
          <h2 className="text-3xl font-black text-slate-900 leading-tight tracking-tight">{claim.currentStatus}</h2>
          
          <div className="mt-10 flex items-center justify-between p-6 bg-slate-50/80 backdrop-blur-sm rounded-4xl border border-slate-100 shadow-inner">
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase italic mb-1">Estimated Completion</p>
              <p className="text-2xl font-black text-blue-600 tracking-tight">{claim.estimatedRemainingTime}</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md text-blue-600 group-hover:translate-x-1 transition-transform">
              <ChevronRight size={24} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-blue-900/30 group relative overflow-hidden">
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        <h3 className="font-bold text-lg mb-8 flex items-center gap-3 relative z-10">
          <ShieldCheck className="text-blue-400 group-hover:animate-bounce" size={26} /> 
          Critical Actions
        </h3>
        <div className="space-y-4 relative z-10">
          {pendingAction ? (
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Attention Required</p>
              <p className="text-sm font-medium leading-relaxed opacity-90">{pendingAction.actionRequired}</p>
            </div>
          ) : (
            <p className="text-slate-500 text-sm italic py-4 pl-2">No pending actions detected.</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout header={Header} sidebar={Sidebar}>
      <div className="space-y-8 relative pb-20">
        <div className="absolute left-[31.5px] top-4 bottom-4 w-0.75 bg-linear-to-b from-blue-500 via-slate-200 to-transparent hidden md:block opacity-50" />
        
        {claim.processDetails.map((detail, index) => {
          const NodeComponent = getComponentForNode(detail.title);
          const isNoteInputActive = activeInputIndex === index;
          const isNote = detail.title === "Information Note";

          return (
            <div key={index} className="relative pl-0 md:pl-24 group">
              <div className={`
                absolute left-[24.5px] top-12 rounded-full border-4 border-[#F8FAFC] transition-all duration-300 hidden md:block z-20 shadow-lg
                ${isNote 
                  ? 'w-3.5 h-3.5 bg-amber-400 translate-x-[1.5px]' 
                  : 'w-5 h-5 bg-slate-300 group-hover:bg-blue-600 group-hover:scale-125'}
              `} />
              
              <div className="transition-all duration-500 group-hover:-translate-y-1.5">
                <NodeComponent data={detail} />
              </div>

              <div className="mt-5">
                {isNoteInputActive ? (
                  <QuickNoteInput 
                    onSave={(text) => {
                      addNote(index, text);
                      setActiveInputIndex(null);
                    }}
                    onCancel={() => setActiveInputIndex(null)}
                  />
                ) : (
                  <div className="flex justify-center md:justify-start">
                    {!isNote && (
                      <button 
                        onClick={() => setActiveInputIndex(index)}
                        className="opacity-0 cursor-pointer group-hover:opacity-100 bg-white hover:bg-slate-900 hover:text-white border border-slate-200 shadow-xl px-7 py-3 rounded-full text-[10px] font-black transition-all flex items-center gap-2 uppercase tracking-[0.2em] translate-y-3 group-hover:translate-y-0 active:scale-95"
                      >
                        <Plus size={14} className="text-blue-500" /> Insert Manual Info
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}

export default App;