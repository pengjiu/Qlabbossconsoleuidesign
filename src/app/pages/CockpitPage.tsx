import { Link } from "react-router";
import { KPICard } from "../components/shared/KPICard";
import { StatusBadge } from "../components/shared/StatusBadge";
import { Repeat, TrendingUp, Database, AlertCircle, CheckCircle, ChevronRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const equityData = [
  { date: "Jan", value: 100000 },
  { date: "Feb", value: 105200 },
  { date: "Mar", value: 108900 },
  { date: "Apr", value: 112400 },
  { date: "May", value: 118700 },
  { date: "Jun", value: 123400 },
];

const researchList = [
  { id: "1", name: "Crypto Perp 多因子多空对冲", type: "多因子对冲", universe: "crypto_perp_core", freq: "1h", progress: 75, status: "running" },
  { id: "2", name: "BTC/ETH 低换手策略 v3", type: "多因子趋势", universe: "crypto_perp_core", freq: "4h", progress: 90, status: "waiting" },
  { id: "3", name: "SOL 期现套利研究", type: "期现套利", universe: "crypto_spot_perp", freq: "15m", progress: 45, status: "blocked" },
];

const bossTodos = [
  {
    type: "decision",
    title: "BTC/ETH 多因子对冲候选",
    description: "是否进入纸面交易",
    actions: ["查看详情", "批准继续"],
    variant: "warning" as const,
  },
  {
    type: "blocked",
    title: "SOL 数据覆盖不足",
    description: "需要补充历史数据",
    actions: ["查看详情", "补数"],
    variant: "danger" as const,
  },
  {
    type: "review",
    title: "低换手策略 OOS 表现异常",
    description: "需要审阅验证结果",
    actions: ["查看详情"],
    variant: "warning" as const,
  },
];

export function CockpitPage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-semibold mb-2">总览 Cockpit</h1>
        <p className="text-muted-foreground">多飞轮 Alpha 研发总控台</p>
      </div>

      <div className="grid grid-cols-5 gap-6">
        <KPICard title="运行中飞轮" value={6} icon={Repeat} />
        <KPICard title="等待决策" value={2} icon={AlertCircle} variant="warning" />
        <KPICard title="最佳 OOS Sharpe" value={1.72} icon={TrendingUp} variant="success" />
        <KPICard title="数据健康度" value="96%" icon={Database} variant="success" />
        <KPICard title="本周有效候选" value={18} icon={CheckCircle} />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-6">飞轮运行态势</h2>
            <div className="flex items-center justify-between gap-2">
              {["目标编译", "数据检查", "因子挖掘", "候选筛选", "策略回测", "OOS 验证", "纸面交易", "晋升 Gate"].map((stage, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium ${
                      i < 4 ? "bg-success/20 text-success border-2 border-success" :
                      i === 4 ? "bg-primary/20 text-primary border-2 border-primary" :
                      "bg-muted/20 text-muted-foreground border-2 border-muted/50"
                    }`}>
                      {i + 1}
                    </div>
                    <span className="text-xs mt-2 text-center w-16">{stage}</span>
                  </div>
                  {i < 7 && <ChevronRight size={16} className="text-muted-foreground mt-[-20px]" />}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">重点研究</h2>
              <Link to="/research" className="text-sm text-primary hover:text-primary/80">
                查看全部 →
              </Link>
            </div>
            <div className="space-y-3">
              {researchList.map((research) => (
                <Link
                  key={research.id}
                  to={`/research/${research.id}`}
                  className="flex items-center justify-between p-4 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors cursor-pointer group"
                >
                  <div className="flex-1 grid grid-cols-5 gap-4">
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">{research.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{research.type}</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground">Universe</p>
                      <p className="font-medium">{research.universe}</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground">频率</p>
                      <p className="font-medium">{research.freq}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-muted/30 rounded-full h-2">
                        <div className="bg-primary h-full rounded-full" style={{ width: `${research.progress}%` }} />
                      </div>
                      <span className="text-sm font-medium tabular-nums">{research.progress}%</span>
                    </div>
                    <div className="flex justify-end">
                      <StatusBadge
                        status={research.status as any}
                        label={
                          research.status === "running" ? "运行中" :
                          research.status === "waiting" ? "等待决策" :
                          "数据阻塞"
                        }
                      />
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-muted-foreground ml-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-6">最近策略表现</h2>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={equityData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis dataKey="date" stroke="#94A3B8" style={{ fontSize: "12px" }} />
                <YAxis stroke="#94A3B8" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1E293B", border: "1px solid rgba(148, 163, 184, 0.1)", borderRadius: "8px" }}
                  labelStyle={{ color: "#F8FAFC" }}
                />
                <Area type="monotone" dataKey="value" stroke="#3B82F6" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Boss 待办</h2>
            <div className="space-y-4">
              {bossTodos.map((todo, i) => (
                <div key={i} className={`p-4 border rounded-lg ${
                  todo.variant === "danger" ? "border-danger/20 bg-danger/5" :
                  todo.variant === "warning" ? "border-warning/20 bg-warning/5" :
                  "border-border"
                }`}>
                  <div className="flex items-start gap-2 mb-2">
                    {todo.variant === "danger" && <AlertCircle size={16} className="text-danger mt-0.5" />}
                    {todo.variant === "warning" && <AlertCircle size={16} className="text-warning mt-0.5" />}
                    <div className="flex-1">
                      <p className="font-medium text-sm">{todo.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{todo.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {todo.actions.map((action, j) => (
                      <button
                        key={j}
                        className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                          j === 0
                            ? "bg-secondary hover:bg-secondary/80 text-foreground"
                            : "bg-primary hover:bg-primary/80 text-primary-foreground"
                        }`}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
