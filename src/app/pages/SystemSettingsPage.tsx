import { useState } from "react";
import { Settings, Database, Bell, Shield, Trash2 } from "lucide-react";
import { StatusBadge } from "../components/shared/StatusBadge";

export function SystemSettingsPage() {
  const [activeTab, setActiveTab] = useState<"general" | "storage" | "api" | "notifications">("general");

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">系统设置</h1>
        <p className="text-muted-foreground">配置系统参数和偏好</p>
      </div>

      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab("general")}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === "general" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <div className="flex items-center gap-2">
            <Settings size={18} />
            通用设置
          </div>
        </button>
        <button
          onClick={() => setActiveTab("storage")}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === "storage" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <div className="flex items-center gap-2">
            <Database size={18} />
            存储路径
          </div>
        </button>
        <button
          onClick={() => setActiveTab("api")}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === "api" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <div className="flex items-center gap-2">
            <Shield size={18} />
            API 连接
          </div>
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === "notifications" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <div className="flex items-center gap-2">
            <Bell size={18} />
            通知设置
          </div>
        </button>
      </div>

      {activeTab === "general" && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">工作区设置</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">工作区名称</label>
                <input
                  type="text"
                  defaultValue="Production"
                  className="w-full max-w-md px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">默认市场</label>
                <select className="w-full max-w-md px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Crypto Perpetual Futures</option>
                  <option>Crypto Spot</option>
                  <option>Equity Futures</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">默认 Venue</label>
                <select className="w-full max-w-md px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Binance Perp</option>
                  <option>Binance Spot</option>
                  <option>OKX Perp</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">默认成本模型</label>
                <input
                  type="text"
                  defaultValue="0.04% Maker / 0.06% Taker"
                  className="w-full max-w-md px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">默认数据切分策略</label>
                <select className="w-full max-w-md px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Walk-Forward OOS</option>
                  <option>Nested WFO</option>
                  <option>CPCV</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "storage" && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">存储路径摘要</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">市场数据路径</span>
                <code className="text-xs bg-secondary px-3 py-1 rounded">/data/market</code>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">研究结果路径</span>
                <code className="text-xs bg-secondary px-3 py-1 rounded">/data/research</code>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">策略证据路径</span>
                <code className="text-xs bg-secondary px-3 py-1 rounded">/data/evidence</code>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">日志路径</span>
                <code className="text-xs bg-secondary px-3 py-1 rounded">/logs</code>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground">配置路径</span>
                <code className="text-xs bg-secondary px-3 py-1 rounded">/config</code>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "api" && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">API 连接状态</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                <div>
                  <p className="font-medium">Binance Perp API</p>
                  <p className="text-xs text-muted-foreground mt-1">市场数据和历史 K 线</p>
                </div>
                <StatusBadge status="success" label="已连接" />
              </div>

              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                <div>
                  <p className="font-medium">Agent Service API</p>
                  <p className="text-xs text-muted-foreground mt-1">AI Agent 协作服务</p>
                </div>
                <StatusBadge status="success" label="已连接" />
              </div>

              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                <div>
                  <p className="font-medium">证据存储 API</p>
                  <p className="text-xs text-muted-foreground mt-1">证据链和 Gate 记录</p>
                </div>
                <StatusBadge status="success" label="已连接" />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "notifications" && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">通知偏好</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 bg-secondary border border-border rounded focus:ring-2 focus:ring-primary"
                />
                <div>
                  <p className="font-medium text-sm">研究飞轮完成</p>
                  <p className="text-xs text-muted-foreground">当研究飞轮到达需要 Boss 决策的阶段时通知</p>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 bg-secondary border border-border rounded focus:ring-2 focus:ring-primary"
                />
                <div>
                  <p className="font-medium text-sm">数据阻塞警告</p>
                  <p className="text-xs text-muted-foreground">当数据覆盖不足导致研究阻塞时通知</p>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 bg-secondary border border-border rounded focus:ring-2 focus:ring-primary"
                />
                <div>
                  <p className="font-medium text-sm">策略晋升候选</p>
                  <p className="text-xs text-muted-foreground">当策略通过所有 Gate 可以晋升时通知</p>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-secondary border border-border rounded focus:ring-2 focus:ring-primary"
                />
                <div>
                  <p className="font-medium text-sm">Agent 任务完成</p>
                  <p className="text-xs text-muted-foreground">当 AI Agent 完成分配任务时通知</p>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-secondary border border-border rounded focus:ring-2 focus:ring-primary"
                />
                <div>
                  <p className="font-medium text-sm">验证失败</p>
                  <p className="text-xs text-muted-foreground">当回测或 OOS 验证失败时通知</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      )}

      <div className="bg-card border border-danger/20 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <Trash2 size={20} className="text-danger mt-0.5" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-danger mb-2">危险区域</h2>
            <p className="text-sm text-muted-foreground mb-4">
              这些操作不可逆，请谨慎使用
            </p>
            <div className="space-y-3">
              <button className="px-4 py-2 bg-danger/10 text-danger border border-danger/20 hover:bg-danger/20 rounded-lg transition-colors">
                清除所有缓存数据
              </button>
              <button className="px-4 py-2 bg-danger/10 text-danger border border-danger/20 hover:bg-danger/20 rounded-lg transition-colors ml-3">
                重置所有设置
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
