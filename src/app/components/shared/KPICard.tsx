import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: {
    value: string;
    direction: "up" | "down" | "neutral";
  };
  variant?: "default" | "success" | "warning" | "danger";
}

export function KPICard({ title, value, icon: Icon, trend, variant = "default" }: KPICardProps) {
  const variantColors = {
    default: "border-border",
    success: "border-success/20 bg-success/5",
    warning: "border-warning/20 bg-warning/5",
    danger: "border-danger/20 bg-danger/5",
  };

  return (
    <div className={`bg-card border ${variantColors[variant]} rounded-lg p-6`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-2">{title}</p>
          <p className="text-3xl font-semibold tabular-nums">{value}</p>
          {trend && (
            <p className={`text-sm mt-2 ${trend.direction === "up" ? "text-success" : trend.direction === "down" ? "text-danger" : "text-muted-foreground"}`}>
              {trend.value}
            </p>
          )}
        </div>
        {Icon && (
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon size={24} className="text-primary" />
          </div>
        )}
      </div>
    </div>
  );
}
