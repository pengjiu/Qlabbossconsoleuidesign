import { useState } from "react";
import { useNavigate } from "react-router";
import { CheckCircle, Circle, Info } from "lucide-react";

const steps = [
  "研究目标",
  "Label 与预测目标",
  "数据切分与防过拟合",
  "成本与交易约束",
  "运行模式",
  "审核与创建",
];

export function NewResearchWizardPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/research");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-semibold mb-2">新建研究</h1>
        <p className="text-muted-foreground">创建新的 Alpha 研究飞轮</p>
      </div>

      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                  index < currentStep
                    ? "bg-success border-success text-success-foreground"
                    : index === currentStep
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-muted text-muted-foreground"
                }`}
              >
                {index < currentStep ? <CheckCircle size={20} /> : <span className="text-sm font-medium">{index + 1}</span>}
              </div>
              <span className={`text-xs mt-2 text-center ${index === currentStep ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-0.5 mb-6 ${index < currentStep ? "bg-success" : "bg-muted"}`} />
            )}
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-lg p-8">
        {currentStep === 0 && <Step1_ResearchGoal />}
        {currentStep === 1 && <Step2_LabelTarget />}
        {currentStep === 2 && <Step3_DataSplit />}
        {currentStep === 3 && <Step4_CostConstraints />}
        {currentStep === 4 && <Step5_OperationMode />}
        {currentStep === 5 && <Step6_Review />}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="px-6 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          上一步
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors"
        >
          {currentStep === steps.length - 1 ? "保存并进入飞轮" : "下一步"}
        </button>
      </div>
    </div>
  );
}

function Step1_ResearchGoal() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">研究目标</h2>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">研究名称</label>
          <input
            type="text"
            placeholder="例如: Crypto Perp 多因子多空对冲"
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">市场</label>
          <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Crypto Perpetual Futures</option>
            <option>Crypto Spot</option>
            <option>Equity Futures</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Venue</label>
          <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Binance Perp</option>
            <option>Binance Spot</option>
            <option>OKX Perp</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Universe</label>
          <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option>crypto_perp_core</option>
            <option>crypto_perp_liquid</option>
            <option>crypto_perp_alt</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">策略模板</label>
          <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option>多因子多空对冲</option>
            <option>多因子多腿套利</option>
            <option>多因子趋势</option>
            <option>多因子均值回归</option>
            <option>多因子期现套利</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">持仓结构</label>
          <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option>1 多 / 1 空</option>
            <option>N 多 / N 空</option>
            <option>多腿组合</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">执行频率</label>
          <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option>15m</option>
            <option>1h</option>
            <option>4h</option>
            <option>1d</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">初始资金</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="100000"
              className="flex-1 px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select className="px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>USDT</option>
              <option>USD</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2_LabelTarget() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Label 与预测目标</h2>

      <div className="p-4 bg-info/5 border border-info/20 rounded-lg flex items-start gap-3">
        <Info size={20} className="text-info mt-0.5" />
        <p className="text-sm">
          Label 决定因子和策略预测的目标，必须与 Universe、频率、数据切分一致。
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Label Profile</label>
          <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option>forward_return_1h</option>
            <option>forward_return_4h</option>
            <option>forward_sharpe_1h</option>
            <option>cost_adjusted_return_1h</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">预测视野 (Horizon)</label>
          <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option>自动推导自执行频率</option>
            <option>1 小时</option>
            <option>4 小时</option>
            <option>1 天</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 bg-secondary border border-border rounded focus:ring-2 focus:ring-primary"
            />
            <span className="text-sm font-medium">成本调整目标 (推荐)</span>
          </label>
          <p className="text-xs text-muted-foreground mt-1 ml-6">
            Label 将包含交易成本，确保策略不会忽略实际执行费用
          </p>
        </div>

        <div className="col-span-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked
              disabled
              className="w-4 h-4 bg-secondary border border-border rounded focus:ring-2 focus:ring-primary opacity-50"
            />
            <span className="text-sm font-medium text-muted-foreground">未来数据泄漏防护 (锁定)</span>
          </label>
          <p className="text-xs text-muted-foreground mt-1 ml-6">
            此设置不可关闭，确保所有 Label 计算不使用未来信息
          </p>
        </div>
      </div>
    </div>
  );
}

function Step3_DataSplit() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">数据切分与防过拟合</h2>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">切分策略</label>
          <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Walk-Forward OOS</option>
            <option>Nested WFO</option>
            <option>CPCV</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Warmup 长度 (bars)</label>
          <input
            type="number"
            placeholder="自动推导"
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Train 长度 (bars)</label>
          <input
            type="number"
            placeholder="2000"
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Validation 长度 (bars)</label>
          <input
            type="number"
            placeholder="500"
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">OOS 长度 (bars)</label>
          <input
            type="number"
            placeholder="500"
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Paper-like 长度 (bars)</label>
          <input
            type="number"
            placeholder="300"
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="p-4 bg-secondary/50 border border-border rounded-lg">
        <p className="text-sm font-medium mb-2">数据切分时间线预览</p>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex-1 bg-warning/20 border border-warning/30 rounded px-3 py-2 text-xs text-center">
            Warmup<br />200 bars
          </div>
          <div className="flex-1 bg-primary/20 border border-primary/30 rounded px-3 py-2 text-xs text-center">
            Train<br />2000 bars
          </div>
          <div className="flex-1 bg-info/20 border border-info/30 rounded px-3 py-2 text-xs text-center">
            Validation<br />500 bars
          </div>
          <div className="flex-1 bg-success/20 border border-success/30 rounded px-3 py-2 text-xs text-center">
            OOS<br />500 bars
          </div>
          <div className="flex-1 bg-muted/20 border border-muted/30 rounded px-3 py-2 text-xs text-center">
            Paper<br />300 bars
          </div>
        </div>
      </div>
    </div>
  );
}

function Step4_CostConstraints() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">成本与交易约束</h2>

      <div className="p-4 bg-warning/5 border border-warning/20 rounded-lg flex items-start gap-3">
        <Info size={20} className="text-warning mt-0.5" />
        <div className="text-sm">
          <p className="font-medium mb-1">重要规则</p>
          <p>这些设置作为锁定基线假设。飞轮不能在研究过程中优化或削弱交易成本、滑点、最小名义价值、流动性假设或数据切分规则。</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">手续费模型</label>
          <input
            type="text"
            placeholder="0.04% Maker / 0.06% Taker"
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">滑点模型</label>
          <input
            type="text"
            placeholder="0.02% 保守估计"
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">最小名义价值</label>
          <input
            type="text"
            placeholder="10 USDT"
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">最大换手率</label>
          <input
            type="text"
            placeholder="无限制"
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">最大杠杆</label>
          <input
            type="text"
            placeholder="1x (无杠杆)"
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">流动性过滤</label>
          <input
            type="text"
            placeholder="24h 成交量 > $10M"
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </div>
  );
}

function Step5_OperationMode() {
  const [mode, setMode] = useState<"system" | "agent">("system");

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">运行模式</h2>

      <div className="grid grid-cols-2 gap-6">
        <div
          onClick={() => setMode("system")}
          className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
            mode === "system" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
          }`}
        >
          <h3 className="font-semibold mb-2">System Only</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• 完全配置驱动</li>
            <li>• 无需 AI Agent</li>
            <li>• 系统执行受控搜索</li>
          </ul>
        </div>

        <div
          onClick={() => setMode("agent")}
          className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
            mode === "agent" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
          }`}
        >
          <h3 className="font-semibold mb-2">Agent Assisted</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• AI Agent 辅助假设提炼</li>
            <li>• 系统控制验证和证据</li>
            <li>• Agent 不能改变锁定成本</li>
          </ul>
        </div>
      </div>

      {mode === "agent" && (
        <div className="space-y-4 p-6 bg-secondary/30 rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-2">Agent 研究假设</label>
            <textarea
              placeholder="描述研究方向和假设，例如: 探索加密货币市场的动量反转因子..."
              rows={3}
              className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Agent 因子族关注</label>
            <input
              type="text"
              placeholder="动量、波动率、成交量"
              className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="p-4 bg-info/5 border border-info/20 rounded-lg">
            <p className="text-sm font-medium mb-2">Agent 权限说明</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>✓ Agent 可以提出研究假设</li>
              <li>✓ Agent 可以在允许范围内选择搜索配置</li>
              <li>✓ Agent 可以总结失败原因</li>
              <li>✗ Agent 不能修改锁定成本模型</li>
              <li>✗ Agent 不能改变 Label、数据切分或晋升 Gate</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function Step6_Review() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">审核与创建</h2>

      <div className="space-y-4">
        <div className="p-6 bg-secondary/30 border border-border rounded-lg">
          <h3 className="font-semibold mb-4">Boss 决策摘要</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">研究名称</p>
              <p className="font-medium">Crypto Perp 多因子多空对冲</p>
            </div>
            <div>
              <p className="text-muted-foreground">策略模板</p>
              <p className="font-medium">多因子多空对冲</p>
            </div>
            <div>
              <p className="text-muted-foreground">Universe</p>
              <code className="text-xs bg-secondary px-2 py-1 rounded">crypto_perp_core</code>
            </div>
            <div>
              <p className="text-muted-foreground">执行频率</p>
              <p className="font-medium">1h</p>
            </div>
            <div>
              <p className="text-muted-foreground">初始资金</p>
              <p className="font-medium">100,000 USDT</p>
            </div>
            <div>
              <p className="text-muted-foreground">运行模式</p>
              <p className="font-medium">System Only</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-secondary/30 border border-border rounded-lg">
          <h3 className="font-semibold mb-4">自动推导设置</h3>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>• Label Profile: forward_return_1h (基于频率自动选择)</li>
            <li>• Warmup: 200 bars (系统推荐)</li>
            <li>• 数据切分: Walk-Forward OOS</li>
          </ul>
        </div>

        <div className="p-6 bg-warning/5 border border-warning/20 rounded-lg">
          <h3 className="font-semibold mb-4">锁定假设</h3>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>• 手续费: 0.04% Maker / 0.06% Taker (不可在飞轮中优化)</li>
            <li>• 滑点: 0.02% (保守估计，锁定)</li>
            <li>• 数据切分规则: 锁定，不可修改</li>
            <li>• Label 定义: 锁定</li>
          </ul>
        </div>

        <div className="p-6 bg-info/5 border border-info/20 rounded-lg">
          <h3 className="font-semibold mb-4">执行前必需证据</h3>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>• Universe 数据覆盖完整性验证</li>
            <li>• Label 可用性检查</li>
            <li>• Feature Set 兼容性验证</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
