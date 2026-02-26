import { NavLink } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, Landmark, Coins, Globe, Bell } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: '首页总览', path: '/', icon: LayoutDashboard },
  { name: '权益市场', path: '/equity', icon: TrendingUp },
  { name: '固定收益', path: '/fixed-income', icon: Landmark },
  { name: '大宗商品', path: '/commodities', icon: Coins },
  { name: '宏观经济', path: '/macro', icon: Globe },
  { name: '预警中心', path: '/alerts', icon: Bell },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-slate-300 flex flex-col h-full border-r border-slate-800">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <h1 className="text-lg font-bold text-white tracking-wider">量化跟踪系统</h1>
      </div>
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center px-6 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-indigo-600/10 text-indigo-400 border-r-2 border-indigo-500'
                      : 'hover:bg-slate-800 hover:text-white'
                  )
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
        <p>数据源: WIND / IFIND</p>
        <p>状态: 实时监控中</p>
      </div>
    </div>
  );
}
