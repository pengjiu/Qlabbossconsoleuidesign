import { useParams, Link } from "react-router";
import { StatusBadge } from "../components/shared/StatusBadge";
import { Play, Pause, FileText, Download, CheckCircle, Clock, AlertCircle, ChevronRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const pipelineStages = [
  { id: 1, name: "目标编译", status: "completed", evidence: 5, updated: "2024-01-15 10:23" },
  { id: 2, name: "数据覆盖", status: "completed", evidence: 12, updated: "2024-01-15 10:45" },
  { id: 3, name: "Label 对齐", status: "completed", evidence: 8, updated: "2024-01-15 11:02" },
  { id: 4, name: "因子挖掘", status: "completed", evidence: 156, updated: "2024-01-16 14:22" },
  { id: 5, name: "候选筛选", status: "completed", evidence: 24, updated: "2024-01-17 09:15" },
  { id: 6, name: "策略构建", status: "completed", evidence: 18, updated: "2024-01-17 15:30" },
  { id: 7, name: "回测验证", status: "completed", evidence: 12, updated: "2024-01-18 11:45" },
  { id: 8, name: "OOS 检查", status: "running", evidence: 6, updated: "2024-01-18 16:20" },
  { id: 9, name: "纸面交易", status: "pending", evidence: 0, updated: "-" },
  { id: 10, name: "晋升 Gate", status: "pending", evidence: 0, updated: "-" },
];

const candidateStrategies = [
  { id: "12", name: "Candidate #12", sharpe: 1.72, return: 23.4, dd: -8.6, turnover: "低", status: "best" },
  { id: "8", name: "Candidate #8", sharpe: 1.45, return: 19.2, dd: -6.2, turnover: "低", status: "good" },
  { id: "15", name: "Candidate #15", sharpe: 1.38, return: 18.7, dd: -9.1, turnover: "中", status: "good" },
  { id: "3", name: "Candidate #3", sharpe: 0.92, return: 12.4, dd: -11.2, turnover: "高", status: "weak" },
];

const equityData = [
  { date: "Week 1", equity: 100000, drawdown: 0 },
  { date: "Week 2", equity: 103200, drawdown: -1.2 },
  { date: "Week 3", equity: 107800, drawdown: -0.5 },
  { date: "Week 4", equity: 106400, drawdown: -2.8 },
  { date: "Week 5", equity: 111900, drawdown: -1.1 },
  { date: "Week 6", equity: 115600, drawdown: -0.3 },
  { date: "Week 7", equity: 119200, drawdown: -1.8 },
  { date: "Week 8", equity: 123400, drawdown: -0.7 },
];

export function ResearchFlywheelDetailPage() {
  const { id } = useParams();

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-semibold">Crypto Perp 多因子多空对冲</h1>
            <StatusBadge status="running" label="运行中" />
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Run ID: research-{id}</span>
            <span>创建时间: 2024-01-15 10:00</span>
            <span>负责人: Boss</span>
            <span>运行模式: Agent Assisted</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
            <FileText size={18} />
            查看最新报告
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
            <Download size={18} />
            导出证据包
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning border border-warning/20 hover:bg-warning/20 rounded-lg transition-colors">
            <Pause size={18} />
            暂停
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors">
            <Play size={18} />
            继续运行
          </button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Boss 目标</h2>
        <div className="grid grid-cols-4 gap-6 text-sm">
          <div>
            <p className="text-muted-foreground mb-1">市场</p>
            <p className="font-medium">Crypto Perpetual Futures</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Venue</p>
            <p className="font-medium">Binance Perp</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Universe</p>
            <code className="text-xs bg-secondary px-2 py-1 rounded">crypto_perp_core</code>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">执行频率</p>
            <p className="font-medium">1h</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">策略模板</p>
            <p className="font-medium">多因子多空对冲</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">持仓结构</p>
            <p className="font-medium">1 多 / 1 空</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">初始资金</p>
            <p className="font-medium tabular-nums">100,000 USDT</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">成本模型</p>
            <p className="font-medium">Locked (不可优化)</p>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-6">飞轮流程</h2>
        <div className="grid grid-cols-5 gap-4">
          {pipelineStages.map((stage) => (
            <div
              key={stage.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all hover:border-primary ${
                stage.status === "completed" ? "border-success/30 bg-success/5" :
                stage.status === "running" ? "border-primary/50 bg-primary/5" :
                "border-border"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground">{stage.id}</span>
                {stage.status === "completed" && <CheckCircle size={16} className="text-success" />}
                {stage.status === "running" && <Clock size={16} className="text-primary animate-pulse" />}
                {stage.status === "pending" && <Clock size={16} className="text-muted-foreground" />}
              </div>
              <p className="font-medium text-sm mb-2">{stage.name}</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>证据: {stage.evidence}</p>
                <p>更新: {stage.updated.split(" ")[1] || "-"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">候选策略</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left pb-3 text-xs font-medium text-muted-foreground uppercase">候选</th>
                    <th className="text-right pb-3 text-xs font-medium text-muted-foreground uppercase">Sharpe</th>
                    <th className="text-right pb-3 text-xs font-medium text-muted-foreground uppercase">年化回报</th>
                    <th className="text-right pb-3 text-xs font-medium text-muted-foreground uppercase">Max DD</th>
                    <th className="text-left pb-3 text-xs font-medium text-muted-foreground uppercase">换手率</th>
                    <th className="text-left pb-3 text-xs font-medium text-muted-foreground uppercase"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {candidateStrategies.map((candidate) => (
                    <tr key={candidate.id} className="hover:bg-secondary/30 transition-colors">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          {candidate.status === "best" && (
                            <div className="w-2 h-2 bg-success rounded-full" />
                          )}
                          <span className="font-medium">{candidate.name}</span>
                        </div>
                      </td>
                      <td className="text-right py-3">
                        <span className={`font-medium tabular-nums ${candidate.sharpe > 1.5 ? "text-success" : "text-foreground"}`}>
                          {candidate.sharpe.toFixed(2)}
                        </span>
                      </td>
                      <td className="text-right py-3">
                        <span className="tabular-nums text-success">+{candidate.return.toFixed(1)}%</span>
                      </td>
                      <td className="text-right py-3">
                        <span className={`tabular-nums ${Math.abs(candidate.dd) < 10 ? "text-success" : "text-warning"}`}>
                          {candidate.dd.toFixed(1)}%
                        </span>
                      </td>
                      <td className="py-3 text-sm">{candidate.turnover}</td>
                      <td className="py-3 text-right">
                        <Link to={`/strategies/${candidate.id}`} className="text-primary hover:text-primary/80 text-sm">
                          查看详情 →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">回测表现 (最佳候选)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={equityData}>
                <defs>
                  <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis dataKey="date" stroke="#94A3B8" style={{ fontSize: "12px" }} />
                <YAxis stroke="#94A3B8" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1E293B", border: "1px solid rgba(148, 163, 184, 0.1)", borderRadius: "8px" }}
                  labelStyle={{ color: "#F8FAFC" }}
                />
                <Area type="monotone" dataKey="equity" stroke="#10B981" fillOpacity={1} fill="url(#colorEquity)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">回撤曲线</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={equityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis dataKey="date" stroke="#94A3B8" style={{ fontSize: "12px" }} />
                <YAxis stroke="#94A3B8" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1E293B", border: "1px solid rgba(148, 163, 184, 0.1)", borderRadius: "8px" }}
                  labelStyle={{ color: "#F8FAFC" }}
                />
                <Bar dataKey="drawdown" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">下一步建议</h2>
            <div className="space-y-3">
              <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">OOS 验证即将完成</p>
                    <p className="text-xs text-muted-foreground mt-1">预计 2 小时内完成</p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <p className="text-sm">Candidate #12 表现优异，建议进入纸面交易</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">当前阻塞</h2>
            <p className="text-sm text-muted-foreground">无</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">需要 Boss 决策</h2>
            <div className="space-y-3">
              <div className="p-3 bg-warning/5 border border-warning/20 rounded-lg">
                <p className="text-sm font-medium mb-2">是否继续纸面交易?</p>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-1.5 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90">
                    批准
                  </button>
                  <button className="flex-1 px-3 py-1.5 bg-secondary hover:bg-secondary/80 rounded text-xs font-medium">
                    暂缓
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Agent 待办</h2>
            <p className="text-sm text-muted-foreground">Agent 正在分析 OOS 结果</p>
          </div>
        </div>
      </div>
    </div>
  );
}
