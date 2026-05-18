import { ShieldCheck, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { StatusBadge } from "../components/shared/StatusBadge";

const gateData = [
  {
    name: "Data Gate",
    description: "Universe 数据覆盖完整性",
    required: ["数据覆盖 > 95%", "缺失 bars < 1%", "时间范围满足 warmup + train + val + OOS"],
    status: "pass",
    timestamp: "2024-01-15 10:45",
  },
  {
    name: "Label Gate",
    description: "Label 可用性验证",
    required: ["Label profile 存在", "与 Universe 兼容", "与频率匹配"],
    status: "pass",
    timestamp: "2024-01-15 11:02",
  },
  {
    name: "Feature Gate",
    description: "Feature Set 兼容性",
    required: ["Feature set 存在", "与 Label 对齐", "无未来数据泄漏"],
    status: "pass",
    timestamp: "2024-01-15 11:15",
  },
  {
    name: "Backtest Gate",
    description: "回测有效性",
    required: ["成本模型应用", "滑点估计保守", "最小名义价值满足"],
    status: "pass",
    timestamp: "2024-01-17 15:30",
  },
  {
    name: "OOS Gate",
    description: "样本外验证",
    required: ["OOS Sharpe > 1.0", "回撤 < 15%", "与 Train 表现一致"],
    status: "pass",
    timestamp: "2024-01-18 16:20",
  },
  {
    name: "Paper Trading Gate",
    description: "纸面交易验证",
    required: ["纸面交易 > 30 天", "实时滑点可接受", "信号延迟 < 100ms"],
    status: "pending",
    timestamp: "-",
  },
  {
    name: "Promotion Gate",
    description: "晋升决策",
    required: ["所有 Gate 通过", "Boss 批准", "风险审查完成"],
    status: "pending",
    timestamp: "-",
  },
];

const evidenceTimeline = [
  { stage: "目标编译", time: "2024-01-15 10:23", evidence: "Boss 目标文档", owner: "Boss", status: "complete" },
  { stage: "数据覆盖", time: "2024-01-15 10:45", evidence: "数据完整性报告", owner: "System", status: "complete" },
  { stage: "Label 对齐", time: "2024-01-15 11:02", evidence: "Label 兼容性证明", owner: "System", status: "complete" },
  { stage: "因子挖掘", time: "2024-01-16 14:22", evidence: "156 个因子候选", owner: "Agent", status: "complete" },
  { stage: "候选筛选", time: "2024-01-17 09:15", evidence: "24 个策略候选", owner: "System", status: "complete" },
  { stage: "策略构建", time: "2024-01-17 15:30", evidence: "18 个完整策略", owner: "System", status: "complete" },
  { stage: "回测验证", time: "2024-01-18 11:45", evidence: "回测报告", owner: "System", status: "complete" },
  { stage: "OOS 检查", time: "2024-01-18 16:20", evidence: "OOS 验证报告", owner: "System", status: "complete" },
];

export function EvidenceGatePage() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">证据链与 Gate</h1>
        <p className="text-muted-foreground">确保研究可信度和可审计性</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <ShieldCheck size={20} className="text-primary" />
            Gate 状态
          </h2>
          <div className="space-y-4">
            {gateData.map((gate, i) => (
              <div key={i} className="p-4 bg-secondary/30 border border-border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-2">
                    {gate.status === "pass" && <CheckCircle size={18} className="text-success mt-0.5" />}
                    {gate.status === "pending" && <AlertCircle size={18} className="text-muted-foreground mt-0.5" />}
                    {gate.status === "fail" && <XCircle size={18} className="text-danger mt-0.5" />}
                    <div>
                      <p className="font-medium">{gate.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{gate.description}</p>
                    </div>
                  </div>
                  <StatusBadge
                    status={gate.status === "pass" ? "success" : gate.status === "pending" ? "neutral" : "failed"}
                    label={gate.status === "pass" ? "通过" : gate.status === "pending" ? "等待" : "失败"}
                  />
                </div>
                <div className="mt-3 pl-6">
                  <p className="text-xs text-muted-foreground mb-2">必需条件:</p>
                  <ul className="text-xs space-y-1">
                    {gate.required.map((req, j) => (
                      <li key={j} className="text-muted-foreground">• {req}</li>
                    ))}
                  </ul>
                  {gate.timestamp !== "-" && (
                    <p className="text-xs text-muted-foreground mt-2">时间戳: {gate.timestamp}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">证据时间线</h2>
          <div className="space-y-4">
            {evidenceTimeline.map((event, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${event.status === "complete" ? "bg-success" : "bg-muted"}`} />
                  {i < evidenceTimeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1" />}
                </div>
                <div className="flex-1 pb-6">
                  <p className="font-medium text-sm">{event.stage}</p>
                  <p className="text-xs text-muted-foreground mt-1">{event.evidence}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span>负责人: {event.owner}</span>
                    <span>•</span>
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
