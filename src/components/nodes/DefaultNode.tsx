import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { ExplainWithAI } from "../ExplainWithAI";

export const DefaultNode = ({ data }: { data: any }) => {
  const isCompleted = data.status === "Completed" || data.status === "Report Completed";
  const isInProgress = data.status === "In Progress";

  return (
<div className="glass-card rounded-3xl p-6 transition-all group">
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className={`p-2 rounded-xl ${isCompleted ? 'bg-green-50 text-green-600' : isInProgress ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
            {isCompleted ? <CheckCircle2 size={22} /> : isInProgress ? <Clock size={22} /> : <AlertCircle size={22} />}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-slate-900">{data.title}</h3>
            <span className={`text-[10px] px-2 py-1 rounded-full font-black uppercase tracking-widest ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
              {data.status}
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {Object.entries(data).map(([key, value]) => {
              if (["title", "status"].includes(key)) return null;
              return (
                <div key={key} className="bg-slate-50/50 p-2 rounded-lg border border-slate-100/50">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">{key.replace(/([A-Z])/g, ' $1')}</p>
                  <p className="text-slate-700 font-semibold">{value as string}</p>
                </div>
              );
            })}
          </div>

          <ExplainWithAI title={data.title} />
        </div>
      </div>
    </div>
  );
};