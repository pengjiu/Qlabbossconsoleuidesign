import { Link } from "react-router";
import { Plus, Filter, Search, ChevronRight } from "lucide-react";
import { StatusBadge } from "../components/shared/StatusBadge";

const researchData = [
  {
    id: "1",
    name: "Crypto Perp 多因子多空对冲",
    type: "多因子对冲",
    universe: "crypto_perp_core",
    frequency: "1h",
    holdings: "1 多 / 1 空",
    currentStage: "OOS 验证",
    progress: 75,
    bestCandidate: "Candidate #12",
    oosSharpe: 1.72,
    maxDrawdown: -8.6,
    turnover: "低",
    status: "running",
    nextStep: "等待 OOS 结果",
  },
  {
    id: "2",
    name: "BTC/ETH 低换手策略 v3",
    type: "多因子趋势",
    universe: "crypto_perp_core",
    frequency: "4h",
    holdings: "1 多 / 1 空",
    currentStage: "纸面交易",
    progress: 90,
    bestCandidate: "Candidate #8",
    oosSharpe: 1.45,
    maxDrawdown: -6.2,
    turnover: "低",
    status: "waiting",
    nextStep: "Boss 决策是否晋升",
  },
  {
    id: "3",
    name: "SOL 期现套利研究",
    type: "期现套利",
    universe: "crypto_spot_perp",
    frequency: "15m",
    holdings: "多腿组合",
    currentStage: "数据检查",
    progress: 45,
    bestCandidate: "-",
    oosSharpe: null,
    maxDrawdown: null,
    turnover: "-",
    status: "blocked",
    nextStep: "补充历史数据",
  },
  {
    id: "4",
    name: "多因子均值回归 USDT 市场",
    type: "多因子均值回归",
    universe: "crypto_perp_core",
    frequency: "1h",
    holdings: "N 多 / N 空",
    currentStage: "候选筛选",
    progress: 60,
    bestCandidate: "Candidate #5",
    oosSharpe: 0.98,
    maxDrawdown: -12.3,
    turnover: "中",
    status: "running",
    nextStep: "继续回测",
  },
  {
    id: "5",
    name: "高频多因子对冲",
    type: "多因子对冲",
    universe: "crypto_perp_liquid",
    frequency: "5m",
    holdings: "1 多 / 1 空",
    currentStage: "因子挖掘",
    progress: 35,
    bestCandidate: "-",
    oosSharpe: null,
    maxDrawdown: null,
    turnover: "-",
    status: "running",
    nextStep: "Agent 特征工程",
  },
  {
    id: "6",
    name: "BNB/XRP 趋势跟踪",
    type: "多因子趋势",
    universe: "crypto_perp_alt",
    frequency: "4h",
    holdings: "1 多 / 1 空",
    currentStage: "完成",
    progress: 100,
    bestCandidate: "Candidate #3",
    oosSharpe: 1.18,
    maxDrawdown: -9.4,
    turnover: "中",
    status: "completed",
    nextStep: "-",
  },
];

export function ResearchFlywheelListPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-2">研究飞轮</h1>
          <p className="text-muted-foreground">管理多个独立的 Alpha 研究飞轮</p>
        </div>
        <Link
          to="/new-research"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus size={18} />
          新建研究
        </Link>
      </div>

      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="搜索研究名称、策略类型..."
              className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
            <Filter size={18} />
            筛选
          </button>

          <select className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>全部状态</option>
            <option>运行中</option>
            <option>等待决策</option>
            <option>阻塞</option>
            <option>已完成</option>
          </select>

          <select className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>全部策略类型</option>
            <option>多因子对冲</option>
            <option>多因子趋势</option>
            <option>期现套利</option>
            <option>均值回归</option>
          </select>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">研究名称</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">策略类型</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Universe</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">频率</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">当前阶段</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">进度</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">OOS Sharpe</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Max DD</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">状态</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {researchData.map((research) => (
                <tr key={research.id} className="hover:bg-secondary/30 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <Link to={`/research/${research.id}`} className="block">
                      <p className="font-medium group-hover:text-primary transition-colors">{research.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">最佳候选: {research.bestCandidate}</p>
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-sm">{research.type}</td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-secondary px-2 py-1 rounded">{research.universe}</code>
                  </td>
                  <td className="px-6 py-4 text-sm tabular-nums">{research.frequency}</td>
                  <td className="px-6 py-4 text-sm">{research.currentStage}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-muted/30 rounded-full h-2 w-20">
                        <div className="bg-primary h-full rounded-full" style={{ width: `${research.progress}%` }} />
                      </div>
                      <span className="text-sm tabular-nums w-10">{research.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {research.oosSharpe !== null ? (
                      <span className={`text-sm font-medium tabular-nums ${research.oosSharpe > 1.5 ? "text-success" : research.oosSharpe > 1 ? "text-foreground" : "text-muted-foreground"}`}>
                        {research.oosSharpe.toFixed(2)}
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {research.maxDrawdown !== null ? (
                      <span className={`text-sm font-medium tabular-nums ${Math.abs(research.maxDrawdown) < 10 ? "text-success" : "text-warning"}`}>
                        {research.maxDrawdown.toFixed(1)}%
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge
                      status={research.status as any}
                      label={
                        research.status === "running" ? "运行中" :
                        research.status === "waiting" ? "等待决策" :
                        research.status === "blocked" ? "数据阻塞" :
                        "已完成"
                      }
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/research/${research.id}`}>
                      <ChevronRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {researchData.length === 0 && (
        <div className="bg-card border border-border rounded-lg p-12 text-center">
          <p className="text-muted-foreground mb-4">还没有研究飞轮，点击新建研究开始第一个 Alpha 探索。</p>
          <Link
            to="/new-research"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus size={18} />
            新建研究
          </Link>
        </div>
      )}
    </div>
  );
}
