import React from 'react';
import { Users, Briefcase, TrendingUp, BarChart3 } from 'lucide-react';

const CareerStats = () => {
  return (
    <section className="py-12 bg-neutral-900 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="text-emerald-500 mb-2">
                <Users className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-white">25,000+</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Data Careers Launched</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 border-l border-neutral-800">
             <div className="text-emerald-500 mb-2">
                <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-white">45%</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Avg. Salary Hike</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 border-l border-neutral-800">
             <div className="text-emerald-500 mb-2">
                <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-white">1.2M+</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Open Job Vacancies</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 border-l border-neutral-800">
             <div className="text-emerald-500 mb-2">
                <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-white">3+</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Industrial Projects</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerStats;