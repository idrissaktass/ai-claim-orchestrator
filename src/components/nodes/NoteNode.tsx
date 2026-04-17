import { MessageSquare, Clock } from 'lucide-react';

export const NoteNode = ({ data }: { data: any }) => (
  <div className="relative ml-4 md:ml-10 animate-in slide-in-from-left-5 duration-500">
    <div className="absolute -left-10 top-1/2 w-10 h-0.5 bg-blue-100 hidden md:block" />
    
    <div className="bg-amber-50/60 backdrop-blur-sm border border-amber-200/50 rounded-3xl p-6 shadow-sm shadow-amber-100/20 relative overflow-hidden">
      <div className="absolute -right-2 -top-2 text-amber-100/40 rotate-12">
        <MessageSquare size={64} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-amber-100 text-amber-600 rounded-lg">
            <MessageSquare size={14} />
          </div>
          <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">
            User Insight
          </span>
        </div>
        
        <p className="text-sm text-slate-700 italic font-medium leading-relaxed">
          "{data.note}"
        </p>
        
        <div className="mt-4 flex items-center gap-1.5 text-[9px] text-slate-400 font-mono">
          <Clock size={10} />
          {data.dateTime}
        </div>
      </div>
    </div>
  </div>
);