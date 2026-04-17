import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  sidebar: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, header, sidebar }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 selection:bg-blue-100">
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-50 shadow-lg shadow-slate-900/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          {header}
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Sidebar */}
          <aside className="w-full lg:w-96 shrink-0 space-y-6 lg:sticky lg:top-32">
            {sidebar}
          </aside>

          {/*Timeline */}
          <section className="flex-1 w-full min-w-0">
            <div className="animate-fade-in">
              {children}
            </div>
          </section>

        </div>
      </main>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-br from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};