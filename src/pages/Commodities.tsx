import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function Commodities() {
  const commodities = [
    { name: '布伦特原油', code: 'OIL.NYM', price: 82.50, change: 1.2, percent: 1.48 },
    { name: 'WTI原油', code: 'SCF.SHF', price: 78.20, change: 0.8, percent: 1.03 },
    { name: '沪金主力', code: 'AU9999.SGE', price: 505.20, change: -2.5, percent: -0.49 },
    { name: 'COMEX白银', code: 'GC.CMX', price: 24.15, change: 0.15, percent: 0.62 },
    { name: '沪铜主力', code: 'CU.SHF', price: 69500, change: 450, percent: 0.65 },
    { name: '螺纹钢', code: 'RB.SHF', price: 3650, change: -45, percent: -1.22 },
  ];

  const forex = [
    { name: '美元指数', code: 'DXY.OTC', price: 103.50, change: -0.25, percent: -0.24 },
    { name: '在岸人民币', code: 'USD/CNY', price: 7.1950, change: 0.0020, percent: 0.03 },
    { name: '离岸人民币', code: 'USD/CNH', price: 7.2050, change: 0.0015, percent: 0.02 },
    { name: '欧元/美元', code: 'EUR/USD', price: 1.0850, change: 0.0030, percent: 0.28 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">大宗商品与外汇</h2>
          <p className="text-sm text-slate-500 mt-1">期货 / 贵金属 / 汇率</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 大宗商品 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">核心商品行情</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-4 py-3 font-medium">品种</th>
                  <th className="px-4 py-3 font-medium">最新价</th>
                  <th className="px-4 py-3 font-medium">涨跌额</th>
                  <th className="px-4 py-3 font-medium">涨跌幅</th>
                </tr>
              </thead>
              <tbody>
                {commodities.map((item) => (
                  <tr key={item.code} className="border-b border-slate-50 hover:bg-slate-50/50">
                    <td className="px-4 py-3">
                      <div className="font-medium text-slate-800">{item.name}</div>
                      <div className="text-xs text-slate-400">{item.code}</div>
                    </td>
                    <td className="px-4 py-3 font-mono font-medium">{item.price.toFixed(2)}</td>
                    <td className={cn("px-4 py-3 font-mono", item.change >= 0 ? "text-red-500" : "text-green-500")}>
                      {item.change > 0 ? '+' : ''}{item.change.toFixed(2)}
                    </td>
                    <td className={cn("px-4 py-3 font-mono flex items-center", item.percent >= 0 ? "text-red-500" : "text-green-500")}>
                      {item.percent >= 0 ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                      {item.percent > 0 ? '+' : ''}{item.percent.toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 外汇市场 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">外汇市场</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-4 py-3 font-medium">货币对</th>
                  <th className="px-4 py-3 font-medium">最新价</th>
                  <th className="px-4 py-3 font-medium">涨跌额</th>
                  <th className="px-4 py-3 font-medium">涨跌幅</th>
                </tr>
              </thead>
              <tbody>
                {forex.map((item) => (
                  <tr key={item.code} className="border-b border-slate-50 hover:bg-slate-50/50">
                    <td className="px-4 py-3">
                      <div className="font-medium text-slate-800">{item.name}</div>
                      <div className="text-xs text-slate-400">{item.code}</div>
                    </td>
                    <td className="px-4 py-3 font-mono font-medium">{item.price.toFixed(4)}</td>
                    <td className={cn("px-4 py-3 font-mono", item.change >= 0 ? "text-red-500" : "text-green-500")}>
                      {item.change > 0 ? '+' : ''}{item.change.toFixed(4)}
                    </td>
                    <td className={cn("px-4 py-3 font-mono flex items-center", item.percent >= 0 ? "text-red-500" : "text-green-500")}>
                      {item.percent >= 0 ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                      {item.percent > 0 ? '+' : ''}{item.percent.toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
