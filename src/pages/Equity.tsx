import { useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { getSectorFlows } from '../services/mockData';
import { SectorFlow } from '../types';
import { cn } from '../lib/utils';

export function Equity() {
  const [flows, setFlows] = useState<SectorFlow[]>([]);
  const [activeTab, setActiveTab] = useState<'A股' | '港股' | '美股'>('A股');

  useEffect(() => {
    setFlows(getSectorFlows());
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">权益市场</h2>
          <p className="text-sm text-slate-500 mt-1">市场结构与资金流向</p>
        </div>
      </div>

      <div className="flex space-x-1 bg-slate-200/50 p-1 rounded-lg w-fit">
        {(['A股', '港股', '美股'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-6 py-2 text-sm font-medium rounded-md transition-colors",
              activeTab === tab
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'A股' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 行业资金流向 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">申万一级行业资金流向 (亿元)</h3>
            <div className="h-[600px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={flows} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="sector" type="category" axisLine={false} tickLine={false} width={80} tick={{fontSize: 12}} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="flow" radius={[0, 4, 4, 0]} barSize={12}>
                    {flows.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.flow > 0 ? '#ef4444' : '#22c55e'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 市场结构与情绪 */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-800 mb-6">市场结构与情绪</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-500">涨跌家数</span>
                    <span className="font-medium">涨 2800 / 跌 2100</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="h-full bg-red-500" style={{ width: '57%' }}></div>
                    <div className="h-full bg-green-500" style={{ width: '43%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-500">涨跌停统计</span>
                    <span className="font-medium">涨停 65 / 跌停 12</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="h-full bg-red-500" style={{ width: '84%' }}></div>
                    <div className="h-full bg-green-500" style={{ width: '16%' }}></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500 mb-1">市场成交额</p>
                      <p className="text-xl font-bold text-slate-800">8,500 亿</p>
                      <p className="text-xs text-red-500 mt-1">+12% 较昨日</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500 mb-1">连板最高</p>
                      <p className="text-xl font-bold text-slate-800">7 连板</p>
                      <p className="text-xs text-slate-400 mt-1">市场高度</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === '港股' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">港股市场概览</h3>
          <p className="text-slate-500">港股市场数据模块开发中...</p>
        </div>
      )}

      {activeTab === '美股' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">美股市场概览</h3>
          <p className="text-slate-500">美股市场数据模块开发中...</p>
        </div>
      )}
    </div>
  );
}
