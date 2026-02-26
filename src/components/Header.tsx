import { Bell, Search, User, Settings } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-10">
      <div className="flex items-center text-sm text-slate-500">
        <span className="font-medium text-slate-700 mr-2">当前交易日:</span>
        {new Date().toLocaleDateString('zh-CN')}
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="搜索代码/名称..."
            className="pl-9 pr-4 py-1.5 text-sm border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-64"
          />
        </div>
        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
          <User className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
}
