import { User, PhoneCall, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import { ExplainWithAI } from "../ExplainWithAI";

export const AppraisalNode = ({ data }: { data: any }) => (
  <div className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-blue-500 via-indigo-500 to-indigo-700 opacity-80" />
    
    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
            <ShieldCheck size={16} />
          </div>
          <h3 className="text-xl font-black text-slate-900 tracking-tight">{data.title}</h3>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
          <Calendar size={14} />
          <span>Assignment Date: {data.expertAssignmentDate}</span>
        </div>
      </div>
      <div className="px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{data.status}</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-start gap-4 p-5 bg-slate-50/50 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:border-blue-100 transition-all">
        <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
          <User size={20} />
        </div>
        <div>
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Assigned Expert</p>
          <p className="text-sm font-bold text-slate-700 leading-tight">{data.expertInfo}</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-5 bg-slate-50/50 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:border-indigo-100 transition-all">
        <div className="p-3 bg-white rounded-xl shadow-sm text-indigo-600">
          <PhoneCall size={20} />
        </div>
        <div>
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Contact Hotline</p>
          <p className="text-sm font-bold text-slate-700 leading-tight">{data.contact}</p>
        </div>
      </div>
    </div>

    <button className="mt-8 cursor-pointer w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 active:scale-[0.98] transition-all shadow-xl shadow-slate-200">
      View Appraisal Report <ExternalLink size={14} />
    </button>
    
    <ExplainWithAI title={data.title} />
  </div>
);