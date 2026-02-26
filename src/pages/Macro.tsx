import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export function Macro() {
  const pmiData = [
    { month: '23-09', official: 50.2, caixin: 50.6 },
    { month: '23-10', official: 49.5, caixin: 49.5 },
    { month: '23-11', official: 49.4, caixin: 50.7 },
    { month: '23-12', official: 49.0, caixin: 50.8 },
    { month: '24-01', official: 49.2, caixin: 50.8 },
    { month: '24-02', official: 49.1, caixin: 50.9 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">宏观经济</h2>
          <p className="text-sm text-slate-500 mt-1">国内宏观 / 海外与全球宏观</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PMI 走势 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-slate-800">制造业 PMI 走势</h3>
            <div className="flex items-center space-x-4 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mr-1.5"></div>
                <span className="text-slate-600">官方 PMI</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-amber-500 mr-1.5"></div>
                <span className="text-slate-600">财新 PMI</span>
              </div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pmiData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis domain={[48, 52]} axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="official" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="caixin" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 核心宏观指标 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">核心宏观指标</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">GDP 增速 (Q4)</p>
              <p className="text-xl font-bold text-slate-800">5.2%</p>
              <p className="text-xs text-slate-400 mt-1">同比</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">CPI / PPI (1月)</p>
              <p className="text-xl font-bold text-slate-800">-0.8% / -2.5%</p>
              <p className="text-xs text-slate-400 mt-1">同比</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">社融新增 (1月)</p>
              <p className="text-xl font-bold text-slate-800">6.5 万亿</p>
              <p className="text-xs text-green-500 mt-1">超预期</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">美国 CPI (1月)</p>
              <p className="text-xl font-bold text-slate-800">3.1%</p>
              <p className="text-xs text-red-500 mt-1">核心 3.9%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
