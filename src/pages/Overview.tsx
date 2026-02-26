import { useEffect, useState } from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, Tooltip } from 'recharts';
import { ArrowUpRight, ArrowDownRight, AlertTriangle, Calendar } from 'lucide-react';
import { getMarketIndices, getAlerts, getMacroEvents } from '../services/mockData';
import { MarketIndex, Alert, MacroEvent } from '../types';
import { cn } from '../lib/utils';

export function Overview() {
  const [indices, setIndices] = useState<MarketIndex[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [events, setEvents] = useState<MacroEvent[]>([]);

  useEffect(() => {
    setIndices(getMarketIndices());
    setAlerts(getAlerts());
    setEvents(getMacroEvents());
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">首页总览</h2>
          <p className="text-sm text-slate-500 mt-1">核心数据快照与实时监控</p>
        </div>
      </div>

      {/* 主要指数行情卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {indices.map((idx) => (
          <div key={idx.code} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-sm font-medium text-slate-500">{idx.name}</h3>
                <p className="text-xs text-slate-400">{idx.code}</p>
              </div>
              <div className={cn("flex items-center text-sm font-semibold", idx.change >= 0 ? "text-red-500" : "text-green-500")}>
                {idx.change >= 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                {idx.changePercent > 0 ? '+' : ''}{idx.changePercent}%
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-4">{idx.price.toFixed(2)}</div>
            <div className="h-16 w-full mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={idx.history}>
                  <YAxis domain={['dataMin', 'dataMax']} hide />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke={idx.change >= 0 ? '#ef4444' : '#22c55e'}
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 今日预警汇总 */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
              今日预警汇总
            </h3>
            <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-full">实时更新</span>
          </div>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className={cn(
                  "w-2 h-2 rounded-full mt-1.5 mr-3 flex-shrink-0",
                  alert.level === 'red' ? 'bg-red-500' : alert.level === 'orange' ? 'bg-orange-500' : 'bg-yellow-400'
                )} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700">{alert.message}</p>
                  <p className="text-xs text-slate-400 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 宏观事件日历 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-indigo-500" />
              宏观事件日历
            </h3>
          </div>
          <div className="space-y-4">
            {events.map((evt, i) => (
              <div key={i} className="flex items-start border-l-2 border-indigo-100 pl-3 py-1">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-indigo-600">{evt.date}</span>
                    <span className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider",
                      evt.impact === 'high' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
                    )}>
                      {evt.impact}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700">{evt.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
