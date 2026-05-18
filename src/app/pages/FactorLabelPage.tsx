import { useState } from "react";
import { Plus, Tag, Sparkles } from "lucide-react";
import { StatusBadge } from "../components/shared/StatusBadge";

const labelData = [
  { name: "forward_return_1h", universe: "crypto_perp_core", frequency: "1h", horizon: "1h", costAdjusted: true, status: "success" },
  { name: "forward_return_4h", universe: "crypto_perp_core", frequency: "4h", horizon: "4h", costAdjusted: true, status: "success" },
  { name: "forward_sharpe_1h", universe: "crypto_perp_liquid", frequency: "1h", horizon: "1h", costAdjusted: false, status: "success" },
];

const featureData = [
  { name: "momentum_factors_v1", families: "动量、趋势", universe: "crypto_perp_core", frequency: "1h", labelProfile: "forward_return_1h", status: "success" },
  { name: "volatility_factors_v1", families: "波动率", universe: "crypto_perp_core", frequency: "1h", labelProfile: "forward_return_1h", status: "success" },
  { name: "volume_factors_v2", families: "成交量", universe: "crypto_perp_liquid", frequency: "15m", labelProfile: "forward_return_15m", status: "success" },
];

export function FactorLabelPage() {
  const [activeTab, setActiveTab] = useState<"labels" | "features">("labels");

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-2">因子与 Label</h1>
          <p className="text-muted-foreground">管理预测目标和特征工程</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
          <Plus size={18} />
          {activeTab === "labels" ? "创建 Label Profile" : "创建 Feature Set"}
        </button>
      </div>

      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab("labels")}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === "labels" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <div className="flex items-center gap-2">
            <Tag size={18} />
            Label Profiles
          </div>
        </button>
        <button
          onClick={() => setActiveTab("features")}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === "features" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <div className="flex items-center gap-2">
            <Sparkles size={18} />
            Feature Sets
          </div>
        </button>
      </div>

      {activeTab === "labels" && (
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Label 名称</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Universe</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">频率</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">预测视野</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">成本调整</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {labelData.map((label, i) => (
                <tr key={i} className="hover:bg-secondary/30 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <code className="text-sm font-medium">{label.name}</code>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-secondary px-2 py-1 rounded">{label.universe}</code>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-secondary px-2 py-1 rounded">{label.frequency}</code>
                  </td>
                  <td className="px-6 py-4 text-sm">{label.horizon}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={label.costAdjusted ? "success" : "neutral"} label={label.costAdjusted ? "是" : "否"} />
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status="success" label="可用" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "features" && (
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Feature Set 名称</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">因子族</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Universe</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">频率</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Label Profile</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {featureData.map((feature, i) => (
                <tr key={i} className="hover:bg-secondary/30 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <code className="text-sm font-medium">{feature.name}</code>
                  </td>
                  <td className="px-6 py-4 text-sm">{feature.families}</td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-secondary px-2 py-1 rounded">{feature.universe}</code>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-secondary px-2 py-1 rounded">{feature.frequency}</code>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-secondary px-2 py-1 rounded">{feature.labelProfile}</code>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status="success" label="可用" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
