import { MarketIndex, Alert, MacroEvent, YieldCurvePoint, SectorFlow } from '../types';

export const getMarketIndices = (): MarketIndex[] => [
  {
    name: '上证50',
    code: '000016.SH',
    price: 2450.12,
    change: 12.5,
    changePercent: 0.51,
    history: Array.from({ length: 20 }, (_, i) => ({ time: `10:${i.toString().padStart(2, '0')}`, price: 2440 + Math.random() * 20 }))
  },
  {
    name: '沪深300',
    code: '000300.SH',
    price: 3500.45,
    change: 15.2,
    changePercent: 0.43,
    history: Array.from({ length: 20 }, (_, i) => ({ time: `10:${i.toString().padStart(2, '0')}`, price: 3480 + Math.random() * 40 }))
  },
  {
    name: '上证指数',
    code: '000001.SH',
    price: 3050.12,
    change: 15.2,
    changePercent: 0.5,
    history: Array.from({ length: 20 }, (_, i) => ({ time: `10:${i.toString().padStart(2, '0')}`, price: 3030 + Math.random() * 40 }))
  },
  {
    name: '深证成指',
    code: '399001.SZ',
    price: 9500.45,
    change: -20.5,
    changePercent: -0.22,
    history: Array.from({ length: 20 }, (_, i) => ({ time: `10:${i.toString().padStart(2, '0')}`, price: 9520 - Math.random() * 40 }))
  },
  {
    name: '创业板指',
    code: '399006.SZ',
    price: 1850.33,
    change: 10.1,
    changePercent: 0.55,
    history: Array.from({ length: 20 }, (_, i) => ({ time: `10:${i.toString().padStart(2, '0')}`, price: 1840 + Math.random() * 20 }))
  },
  {
    name: '科创50',
    code: '000688.SH',
    price: 800.50,
    change: 5.2,
    changePercent: 0.65,
    history: Array.from({ length: 20 }, (_, i) => ({ time: `10:${i.toString().padStart(2, '0')}`, price: 790 + Math.random() * 20 }))
  },
  {
    name: '中证500',
    code: '000905.SH',
    price: 5200.10,
    change: -10.5,
    changePercent: -0.20,
    history: Array.from({ length: 20 }, (_, i) => ({ time: `10:${i.toString().padStart(2, '0')}`, price: 5210 - Math.random() * 30 }))
  },
  {
    name: '中证800',
    code: '000906.SH',
    price: 3800.20,
    change: 8.5,
    changePercent: 0.22,
    history: Array.from({ length: 20 }, (_, i) => ({ time: `10:${i.toString().padStart(2, '0')}`, price: 3790 + Math.random() * 20 }))
  },
  {
    name: '中证1000',
    code: '000852.SH',
    price: 5500.80,
    change: 25.4,
    changePercent: 0.46,
    history: Array.from({ length: 20 }, (_, i) => ({ time: `10:${i.toString().padStart(2, '0')}`, price: 5470 + Math.random() * 50 }))
  },
  {
    name: '中证2000',
    code: '932000.CSI',
    price: 2100.50,
    change: 18.2,
    changePercent: 0.87,
    history: Array.from({ length: 20 }, (_, i) => ({ time: `10:${i.toString().padStart(2, '0')}`, price: 2080 + Math.random() * 30 }))
  }
];

export const getAlerts = (): Alert[] => [
  { id: '1', level: 'red', message: '北向资金单日净流出>100亿', time: '14:30' },
  { id: '2', level: 'orange', message: '信用利差单日走扩>10bp', time: '13:15' },
  { id: '3', level: 'yellow', message: '融资余额连续3日净流入', time: '09:30' },
];

export const getMacroEvents = (): MacroEvent[] => [
  { date: '今日 20:30', event: '美国2月CPI年率', impact: 'high', country: 'US' },
  { date: '今日 16:00', event: '中国2月M2货币供应年率', impact: 'high', country: 'CN' },
  { date: '明日 09:30', event: '中国70城房价数据', impact: 'medium', country: 'CN' },
];

export const getYieldCurve = (): YieldCurvePoint[] => [
  { term: '1Y', yield: 1.85 },
  { term: '3Y', yield: 2.10 },
  { term: '5Y', yield: 2.25 },
  { term: '7Y', yield: 2.40 },
  { term: '10Y', yield: 2.55 },
  { term: '30Y', yield: 2.80 },
];

export const getSectorFlows = (): SectorFlow[] => [
  { sector: '农林牧渔', flow: 5.2 },
  { sector: '基础化工', flow: -2.1 },
  { sector: '钢铁', flow: -8.5 },
  { sector: '有色金属', flow: 15.6 },
  { sector: '电子', flow: 45.2 },
  { sector: '家用电器', flow: 8.4 },
  { sector: '食品饮料', flow: -12.5 },
  { sector: '纺织服饰', flow: 1.2 },
  { sector: '轻工制造', flow: -3.4 },
  { sector: '医药生物', flow: 22.1 },
  { sector: '公用事业', flow: 6.8 },
  { sector: '交通运输', flow: -5.6 },
  { sector: '房地产', flow: -18.4 },
  { sector: '商贸零售', flow: -2.3 },
  { sector: '社会服务', flow: 4.5 },
  { sector: '综合', flow: 0.8 },
  { sector: '建筑材料', flow: -7.2 },
  { sector: '建筑装饰', flow: -4.1 },
  { sector: '电力设备', flow: 35.6 },
  { sector: '机械设备', flow: 12.4 },
  { sector: '国防军工', flow: 18.9 },
  { sector: '汽车', flow: 28.5 },
  { sector: '通信', flow: 32.1 },
  { sector: '计算机', flow: 42.8 },
  { sector: '传媒', flow: 25.4 },
  { sector: '煤炭', flow: 14.2 },
  { sector: '石油石化', flow: 9.6 },
  { sector: '环保', flow: 2.1 },
  { sector: '美容护理', flow: -1.5 },
  { sector: '银行', flow: -25.4 },
  { sector: '非银金融', flow: -15.8 },
].sort((a, b) => b.flow - a.flow);
