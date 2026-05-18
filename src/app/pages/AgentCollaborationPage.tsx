import { Bot, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { StatusBadge } from "../components/shared/StatusBadge";

const agentTasks = [
  {
    id: "task-001",
    research: "Crypto Perp 多因子多空对冲",
    task: "分析 OOS 验证结果",
    leaseOwner: "Agent-Alpha-01",
    leaseExpiry: "2024-01-18 18:00",
    status: "in_progress",
    lastAction: "生成假设报告",
  },
  {
    id: "task-002",
    research: "高频多因子对冲",
    task: "特征工程建议",
    leaseOwner: "-",
    leaseExpiry: "-",
    status: "waiting",
    lastAction: "等待 Agent 领取",
  },
  {
    id: "task-003",
    research: "BTC/ETH 低换手策略 v3",
    task: "纸面交易评估",
    leaseOwner: "Agent-Beta-02",
    leaseExpiry: "2024-01-18 20:00",
    status: "in_progress",
    lastAction: "收集实时滑点数据",
  },
];

export function AgentCollaborationPage() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Agent 协作</h1>
        <p className="text-muted-foreground">AI Agent 辅助研究任务管理</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-muted-foreground mb-2">进行中任务</p>
              <p className="text-3xl font-semibold">2</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg">
              <Bot size={24} className="text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-muted-foreground mb-2">等待领取</p>
              <p className="text-3xl font-semibold">1</p>
            </div>
            <div className="p-3 bg-warning/10 rounded-lg">
              <Clock size={24} className="text-warning" />
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-muted-foreground mb-2">已完成</p>
              <p className="text-3xl font-semibold">12</p>
            </div>
            <div className="p-3 bg-success/10 rounded-lg">
              <CheckCircle size={24} className="text-success" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Agent 决策范围</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 bg-success/5 border border-success/20 rounded-lg">
            <p className="font-medium mb-3 flex items-center gap-2">
              <CheckCircle size={18} className="text-success" />
              Agent 可以
            </p>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• 提出研究假设和方向</li>
              <li>• 在允许范围内选择搜索配置</li>
              <li>• 精炼因子族关注点</li>
              <li>• 总结失败原因并建议调整</li>
              <li>• 解释策略表现和异常</li>
            </ul>
          </div>

          <div className="p-4 bg-danger/5 border border-danger/20 rounded-lg">
            <p className="font-medium mb-3 flex items-center gap-2">
              <AlertCircle size={18} className="text-danger" />
              Agent 不能
            </p>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• 修改锁定成本模型</li>
              <li>• 改变 Label 定义</li>
              <li>• 调整数据切分规则</li>
              <li>• 绕过晋升 Gate</li>
              <li>• 削弱交易约束</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Task ID</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">研究</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">任务</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Lease 持有者</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Lease 到期</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">状态</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">最后操作</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {agentTasks.map((task) => (
                <tr key={task.id} className="hover:bg-secondary/30 transition-colors">
                  <td className="px-6 py-4">
                    <code className="text-xs">{task.id}</code>
                  </td>
                  <td className="px-6 py-4 text-sm">{task.research}</td>
                  <td className="px-6 py-4 text-sm font-medium">{task.task}</td>
                  <td className="px-6 py-4">
                    {task.leaseOwner !== "-" ? (
                      <code className="text-xs bg-secondary px-2 py-1 rounded">{task.leaseOwner}</code>
                    ) : (
                      <span className="text-sm text-muted-foreground">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm tabular-nums">{task.leaseExpiry}</td>
                  <td className="px-6 py-4">
                    <StatusBadge
                      status={task.status === "in_progress" ? "running" : task.status === "waiting" ? "waiting" : "completed"}
                      label={task.status === "in_progress" ? "进行中" : task.status === "waiting" ? "等待领取" : "已完成"}
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{task.lastAction}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {task.status === "in_progress" && (
                        <>
                          <button className="px-3 py-1 text-xs bg-secondary hover:bg-secondary/80 rounded">查看</button>
                          <button className="px-3 py-1 text-xs bg-danger/10 text-danger hover:bg-danger/20 rounded">释放</button>
                        </>
                      )}
                      {task.status === "waiting" && (
                        <button className="px-3 py-1 text-xs bg-primary text-primary-foreground hover:bg-primary/90 rounded">分配</button>
                      )}
                    </div>
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
