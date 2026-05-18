import { Plus, Layers } from "lucide-react";
import { StatusBadge } from "../components/shared/StatusBadge";

const universeData = [
  { name: "crypto_perp_core", market: "Crypto Perpetual", venue: "Binance Perp", symbols: 8, frequency: "1h", labelProfiles: 3, featureSets: 5, coverage: 98.5, status: "success" },
  { name: "crypto_perp_liquid", market: "Crypto Perpetual", venue: "Binance Perp", symbols: 15, frequency: "15m", labelProfiles: 2, featureSets: 4, coverage: 96.8, status: "success" },
  { name: "crypto_perp_alt", market: "Crypto Perpetual", venue: "Binance Perp", symbols: 22, frequency: "4h", labelProfiles: 2, featureSets: 3, coverage: 94.2, status: "warning" },
  { name: "crypto_spot_perp", market: "Crypto Spot+Perp", venue: "Binance", symbols: 5, frequency: "1h", labelProfiles: 1, featureSets: 2, coverage: 99.1, status: "success" },
];

export function UniverseManagementPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Universe 管理</h1>
          <p className="text-muted-foreground">管理资产组和研究范围</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
          <Plus size={18} />
          创建 Universe
        </button>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Universe 名称</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">市场</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Venue</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Symbol 数</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">默认频率</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Label Profiles</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Feature Sets</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground uppercase">覆盖健康</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {universeData.map((universe, i) => (
                <tr key={i} className="hover:bg-secondary/30 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Layers size={16} className="text-primary" />
                      <code className="text-sm font-medium">{universe.name}</code>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{universe.market}</td>
                  <td className="px-6 py-4 text-sm">{universe.venue}</td>
                  <td className="px-6 py-4 text-right text-sm tabular-nums">{universe.symbols}</td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-secondary px-2 py-1 rounded">{universe.frequency}</code>
                  </td>
                  <td className="px-6 py-4 text-right text-sm tabular-nums">{universe.labelProfiles}</td>
                  <td className="px-6 py-4 text-right text-sm tabular-nums">{universe.featureSets}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-sm font-medium tabular-nums ${universe.coverage > 98 ? "text-success" : "text-foreground"}`}>
                      {universe.coverage.toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={universe.status as any} label={universe.status === "success" ? "可用" : "待验证"} />
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
