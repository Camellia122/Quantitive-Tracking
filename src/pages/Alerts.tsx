import { AlertTriangle, Info, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { getAlerts } from '../services/mockData';
import { useEffect, useState } from 'react';
import { Alert } from '../types';

export function Alerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    setAlerts(getAlerts());
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">预警中心</h2>
          <p className="text-sm text-slate-500 mt-1">自定义预警规则与实时告警推送</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
          配置预警规则
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="border-b border-slate-100 px-6 py-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-800">最新告警记录</h3>
          <div className="flex space-x-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              红色 (紧急)
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              橙色 (关注)
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              黄色 (提示)
            </span>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {alerts.map((alert) => (
            <div key={alert.id} className="p-6 flex items-start hover:bg-slate-50 transition-colors">
              <div className={cn(
                "p-2 rounded-full mr-4",
                alert.level === 'red' ? 'bg-red-100 text-red-600' : 
                alert.level === 'orange' ? 'bg-orange-100 text-orange-600' : 
                'bg-yellow-100 text-yellow-600'
              )}>
                {alert.level === 'red' ? <AlertTriangle className="w-5 h-5" /> : 
                 alert.level === 'orange' ? <AlertCircle className="w-5 h-5" /> : 
                 <Info className="w-5 h-5" />}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-base font-medium text-slate-800">{alert.message}</h4>
                  <span className="text-sm text-slate-500">{alert.time}</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  触发条件: {alert.level === 'red' ? '阈值突破' : alert.level === 'orange' ? '趋势型变动' : '偏离均值'}
                </p>
                <div className="mt-3 flex space-x-3">
                  <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800">查看详情</button>
                  <button className="text-xs font-medium text-slate-500 hover:text-slate-700">忽略</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
