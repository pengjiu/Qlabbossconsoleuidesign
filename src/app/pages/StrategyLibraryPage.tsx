import { Link } from "react-router";
import { TrendingUp, ChevronRight } from "lucide-react";
import { StatusBadge } from "../components/shared/StatusBadge";

const strategyData = [
  { id: "12", name: "BTC/ETH 低换手多因子对冲 v3", research: "Crypto Perp 多因子多空对冲", template: "多因子对冲", universe: "crypto_perp_core", frequency: "1h", oosReturn: 23.4, oosSharpe: 1.72, maxDD: -8.6, turnover: "低", promotion: "promotable", evidence: "complete" },
  { id: "8", name: "Momentum Reversal 策略", research: "BTC/ETH 低换手策略 v3", template: "多因子趋势", universe: "crypto_perp_core", frequency: "4h", oosReturn: 19.2, oosSharpe: 1.45, maxDD: -6.2, turnover: "低", promotion: "paper", evidence: "complete" },
  { id: "15", name: "Multi-leg Arbitrage v2", research: "SOL 期现套利研究", template: "期现套利", universe: "crypto_spot_perp", frequency: "15m", oosReturn: 18.7, oosSharpe: 1.38, maxDD: -9.1, turnover: "中", promotion: "testing", evidence: "partial" },
  { id: "3", name: "Mean Reversion Alpha", research: "多因子均值回归 USDT 市场", template: "多因子均值回归", universe: "crypto_perp_core", frequency: "1h", oosReturn: 12.4, oosSharpe: 0.92, maxDD: -11.2, turnover: "高", promotion: "rejected", evidence: "complete" },
];

export function StrategyLibraryPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-2">策略库</h1>
          <p className="text-muted-foreground">评估策略质量和证据链</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">策略名称</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">研究来源</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">模板</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Universe</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground uppercase">OOS 回报</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground uppercase">OOS Sharpe</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Max DD</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">换手率</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">晋升状态</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {strategyData.map((strategy) => (
                <tr key={strategy.id} className="hover:bg-secondary/30 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <Link to={`/strategies/${strategy.id}`} className="block">
                      <p className="font-medium group-hover:text-primary transition-colors">{strategy.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">ID: #{strategy.id}</p>
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-sm">{strategy.research}</td>
                  <td className="px-6 py-4 text-sm">{strategy.template}</td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-secondary px-2 py-1 rounded">{strategy.universe}</code>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-medium tabular-nums text-success">+{strategy.oosReturn.toFixed(1)}%</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-sm font-medium tabular-nums ${strategy.oosSharpe > 1.5 ? "text-success" : strategy.oosSharpe > 1 ? "text-foreground" : "text-muted-foreground"}`}>
                      {strategy.oosSharpe.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-sm font-medium tabular-nums ${Math.abs(strategy.maxDD) < 10 ? "text-success" : "text-warning"}`}>
                      {strategy.maxDD.toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">{strategy.turnover}</td>
                  <td className="px-6 py-4">
                    <StatusBadge
                      status={strategy.promotion === "promotable" ? "promotable" : strategy.promotion === "paper" ? "running" : strategy.promotion === "testing" ? "waiting" : "failed"}
                      label={strategy.promotion === "promotable" ? "可晋升" : strategy.promotion === "paper" ? "纸面交易" : strategy.promotion === "testing" ? "测试中" : "已拒绝"}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/strategies/${strategy.id}`}>
                      <ChevronRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    </Link>
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
