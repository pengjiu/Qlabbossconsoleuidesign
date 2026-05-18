import { Database, Download, RefreshCw, Calendar } from "lucide-react";
import { KPICard } from "../components/shared/KPICard";
import { StatusBadge } from "../components/shared/StatusBadge";

const symbolData = [
  { symbol: "BTCUSDT", venue: "Binance Perp", frequency: "1m", earliest: "2020-01-01", latest: "2024-01-18", coverage: 99.8, missing: 12, status: "success" },
  { symbol: "ETHUSDT", venue: "Binance Perp", frequency: "1m", earliest: "2020-01-01", latest: "2024-01-18", coverage: 99.9, missing: 6, status: "success" },
  { symbol: "SOLUSDT", venue: "Binance Perp", frequency: "1m", earliest: "2021-08-01", latest: "2024-01-18", coverage: 94.2, missing: 342, status: "warning" },
  { symbol: "BNBUSDT", venue: "Binance Perp", frequency: "1m", earliest: "2020-01-01", latest: "2024-01-18", coverage: 99.5, missing: 28, status: "success" },
  { symbol: "XRPUSDT", venue: "Binance Perp", frequency: "1m", earliest: "2020-01-01", latest: "2024-01-18", coverage: 99.7, missing: 18, status: "success" },
];

export function DataManagementPage() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">数据管理</h1>
        <p className="text-muted-foreground">管理市场数据覆盖和质量</p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <KPICard title="支持市场" value={3} icon={Database} />
        <KPICard title="Symbol 数量" value={45} icon={Database} />
        <KPICard title="数据覆盖健康度" value="96.2%" icon={Database} variant="success" />
        <KPICard title="缺口数量" value={406} icon={Database} variant="warning" />
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
              <Download size={18} />
              下载 / 更新数据
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg">
              <RefreshCw size={18} />
              重建派生 Bars
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg">
              <Calendar size={18} />
              补齐缺口
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Symbol</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Venue</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">原始频率</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">最早时间</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">最新时间</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground uppercase">覆盖率</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground uppercase">缺失 Bars</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {symbolData.map((row, i) => (
                <tr key={i} className="hover:bg-secondary/30 transition-colors">
                  <td className="px-6 py-4">
                    <code className="text-sm font-medium">{row.symbol}</code>
                  </td>
                  <td className="px-6 py-4 text-sm">{row.venue}</td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-secondary px-2 py-1 rounded">{row.frequency}</code>
                  </td>
                  <td className="px-6 py-4 text-sm tabular-nums">{row.earliest}</td>
                  <td className="px-6 py-4 text-sm tabular-nums">{row.latest}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-sm font-medium tabular-nums ${row.coverage > 99 ? "text-success" : row.coverage > 95 ? "text-foreground" : "text-warning"}`}>
                      {row.coverage.toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-sm tabular-nums ${row.missing < 50 ? "text-muted-foreground" : "text-warning"}`}>
                      {row.missing}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={row.status as any} label={row.status === "success" ? "健康" : "需补数"} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
