export interface MarketIndex {
  name: string;
  code: string;
  price: number;
  change: number;
  changePercent: number;
  history: { time: string; price: number }[];
}

export interface Alert {
  id: string;
  level: 'red' | 'orange' | 'yellow';
  message: string;
  time: string;
}

export interface MacroEvent {
  date: string;
  event: string;
  impact: 'high' | 'medium' | 'low';
  country: string;
}

export interface YieldCurvePoint {
  term: string;
  yield: number;
}

export interface SectorFlow {
  sector: string;
  flow: number;
}
