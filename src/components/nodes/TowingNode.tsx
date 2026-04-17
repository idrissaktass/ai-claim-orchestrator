import { MapPin, Calendar, Truck } from "lucide-react";
import { ExplainWithAI } from "../ExplainWithAI";

export const TowingNode = ({ data }: { data: any }) => (
  <div className="group relative bg-white rounded-4xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
    {/* Success Indicator Line */}
    <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-emerald-400 to-green-600 opacity-80" />
    
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-green-50 text-green-600 rounded-xl shadow-sm">
          <Truck size={20} />
        </div>
        <h3 className="text-xl font-black text-slate-900 tracking-tight">{data.title}</h3>
      </div>
      <span className="bg-green-50 text-green-700 text-[10px] font-black px-3 py-1 rounded-full border border-green-100 uppercase tracking-widest">
        {data.status}
      </span>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex items-start gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 group-hover:bg-green-50/30 transition-colors">
        <div className="p-2 bg-white rounded-lg shadow-sm text-slate-400">
          <MapPin size={16} />
        </div>
        <div>
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">Pickup Location</p>
          <p className="text-sm font-bold text-slate-700">{data.pickupLocation}</p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 group-hover:bg-green-50/30 transition-colors">
        <div className="p-2 bg-white rounded-lg shadow-sm text-slate-400">
          <Calendar size={16} />
        </div>
        <div>
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">Towing Date</p>
          <p className="text-sm font-bold text-slate-700">{data.towingDate}</p>
        </div>
      </div>
    </div>

    {/* Contextual AI Assistant */}
    <ExplainWithAI title={data.title} />
  </div>
);