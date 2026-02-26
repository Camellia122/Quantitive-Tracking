import { useEffect, useState } from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { getYieldCurve } from '../services/mockData';
import { YieldCurvePoint } from '../types';

export function FixedIncome() {
  const [curve, setCurve] = useState<YieldCurvePoint[]>([]);

  useEffect(() => {
    setCurve(getYieldCurve());
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">固定收益</h2>
          <p className="text-sm text-slate-500 mt-1">国债 / 信用债 / 资金面</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 国债收益率曲线 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">中债国债到期收益率曲线</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={curve} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="term" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <YAxis domain={['dataMin - 0.2', 'dataMax + 0.2']} axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <Tooltip />
                <Line type="monotone" dataKey="yield" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4, fill: '#4f46e5' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 关键利差指标 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">关键利差指标</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div>
                <p className="text-sm font-medium text-slate-700">期限利差 (10Y-1Y)</p>
                <p className="text-xs text-slate-500 mt-1">收益率曲线陡峭化程度</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-slate-800">70 bp</p>
                <p className="text-xs text-green-500 mt-1">-2 bp</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div>
                <p className="text-sm font-medium text-slate-700">信用利差 (AAA vs 国债)</p>
                <p className="text-xs text-slate-500 mt-1">3年期</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-slate-800">45 bp</p>
                <p className="text-xs text-red-500 mt-1">+5 bp</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div>
                <p className="text-sm font-medium text-slate-700">中美利差 (10Y)</p>
                <p className="text-xs text-slate-500 mt-1">中国10Y - 美国10Y</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-slate-800">-165 bp</p>
                <p className="text-xs text-slate-400 mt-1">持平</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
