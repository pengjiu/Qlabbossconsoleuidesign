import { useParams } from "react-router";
import { StatusBadge } from "../components/shared/StatusBadge";
import { Download, CheckCircle, AlertCircle } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const equityData = [
  { week: "W1", equity: 100000, drawdown: 0 },
  { week: "W2", equity: 103200, drawdown: -1.2 },
  { week: "W3", equity: 107800, drawdown: -0.5 },
  { week: "W4", equity: 106400, drawdown: -2.8 },
  { week: "W5", equity: 111900, drawdown: -1.1 },
  { week: "W6", equity: 115600, drawdown: -0.3 },
  { week: "W7", equity: 119200, drawdown: -1.8 },
  { week: "W8", equity: 123400, drawdown: -0.7 },
];

const orderData = [
  { time: "2024-01-18 10:00", symbol: "BTCUSDT", side: "BUY", qty: 0.5, price: 42350, fee: 8.47, notional: 21175, reason: "Signal: momentum_up" },
  { time: "2024-01-18 10:00", symbol: "ETHUSDT", side: "SELL", qty: 8.5, price: 2485, fee: 8.44, notional: 21122, reason: "Signal: momentum_down" },
  { time: "2024-01-18 14:00", symbol: "BTCUSDT", side: "SELL", qty: 0.5, price: 42580, fee: 8.52, notional: 21290, reason: "Rebalance" },
];

export function StrategyDetailPage() {
  const { id } = useParams();

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-semibold">BTC/ETH 低换手多因子对冲 v3</h1>
            <StatusBadge status="promotable" label="可晋升" />
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Candidate #{id}</span>
            <span>研究来源: Crypto Perp 多因子多空对冲</span>
            <span>验证时间: 2024-01-18 16:20</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
            <Download size={18} />
            导出证据包
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors">
            <CheckCircle size={18} />
            批准晋升
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">OOS Sharpe</p>
          <p className="text-3xl font-semibold tabular-nums text-success">1.72</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">年化回报</p>
          <p className="text-3xl font-semibold tabular-nums text-success">+23.4%</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">最大回撤</p>
          <p className="text-3xl font-semibold tabular-nums text-success">-8.6%</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">换手率</p>
          <p className="text-3xl font-semibold">低</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">权益曲线</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={equityData}>
                <defs>
                  <linearGradient id="colorEquityDetail" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis dataKey="week" stroke="#94A3B8" style={{ fontSize: "12px" }} />
                <YAxis stroke="#94A3B8" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1E293B", border: "1px solid rgba(148, 163, 184, 0.1)", borderRadius: "8px" }}
                  labelStyle={{ color: "#F8FAFC" }}
                />
                <Area type="monotone" dataKey="equity" stroke="#10B981" fillOpacity={1} fill="url(#colorEquityDetail)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">回撤曲线</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={equityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis dataKey="week" stroke="#94A3B8" style={{ fontSize: "12px" }} />
                <YAxis stroke="#94A3B8" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1E293B", border: "1px solid rgba(148, 163, 184, 0.1)", borderRadius: "8px" }}
                  labelStyle={{ color: "#F8FAFC" }}
                />
                <Bar dataKey="drawdown" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">订单记录</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left pb-3 text-xs font-medium text-muted-foreground uppercase">时间</th>
                    <th className="text-left pb-3 text-xs font-medium text-muted-foreground uppercase">Symbol</th>
                    <th className="text-left pb-3 text-xs font-medium text-muted-foreground uppercase">方向</th>
                    <th className="text-right pb-3 text-xs font-medium text-muted-foreground uppercase">数量</th>
                    <th className="text-right pb-3 text-xs font-medium text-muted-foreground uppercase">价格</th>
                    <th className="text-right pb-3 text-xs font-medium text-muted-foreground uppercase">手续费</th>
                    <th className="text-right pb-3 text-xs font-medium text-muted-foreground uppercase">名义价值</th>
                    <th className="text-left pb-3 text-xs font-medium text-muted-foreground uppercase">原因</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {orderData.map((order, i) => (
                    <tr key={i}>
                      <td className="py-3 tabular-nums">{order.time}</td>
                      <td className="py-3"><code className="text-xs">{order.symbol}</code></td>
                      <td className="py-3">
                        <span className={order.side === "BUY" ? "text-success" : "text-danger"}>{order.side}</span>
                      </td>
                      <td className="py-3 text-right tabular-nums">{order.qty}</td>
                      <td className="py-3 text-right tabular-nums">${order.price.toLocaleString()}</td>
                      <td className="py-3 text-right tabular-nums">${order.fee.toFixed(2)}</td>
                      <td className="py-3 text-right tabular-nums">${order.notional.toLocaleString()}</td>
                      <td className="py-3 text-xs text-muted-foreground">{order.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">策略信息</h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Universe</p>
                <code className="text-xs bg-secondary px-2 py-1 rounded mt-1 inline-block">crypto_perp_core</code>
              </div>
              <div>
                <p className="text-muted-foreground">执行频率</p>
                <p className="font-medium mt-1">1h</p>
              </div>
              <div>
                <p className="text-muted-foreground">持仓结构</p>
                <p className="font-medium mt-1">1 多 / 1 空</p>
              </div>
              <div>
                <p className="text-muted-foreground">策略模板</p>
                <p className="font-medium mt-1">多因子对冲</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">证据状态</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle size={16} className="text-success mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">数据证据</p>
                  <p className="text-xs text-muted-foreground">完整</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={16} className="text-success mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">回测证据</p>
                  <p className="text-xs text-muted-foreground">完整</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={16} className="text-success mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">OOS 证据</p>
                  <p className="text-xs text-muted-foreground">完整</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle size={16} className="text-warning mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">纸面交易证据</p>
                  <p className="text-xs text-muted-foreground">等待开始</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">性能指标</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Calmar Ratio</span>
                <span className="font-medium tabular-nums">2.72</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sortino Ratio</span>
                <span className="font-medium tabular-nums">2.34</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Win Rate</span>
                <span className="font-medium tabular-nums">58.3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg Trade</span>
                <span className="font-medium tabular-nums">$124</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
