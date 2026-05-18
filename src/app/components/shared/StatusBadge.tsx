export type BadgeVariant = "running" | "waiting" | "blocked" | "completed" | "stopped" | "promotable" | "failed" | "warning" | "success" | "neutral";

export function StatusBadge({ status, label }: { status: BadgeVariant; label: string }) {
  const variants: Record<BadgeVariant, string> = {
    running: "bg-primary/10 text-primary border-primary/20",
    waiting: "bg-warning/10 text-warning border-warning/20",
    blocked: "bg-danger/10 text-danger border-danger/20",
    completed: "bg-success/10 text-success border-success/20",
    stopped: "bg-muted/10 text-muted-foreground border-muted/20",
    promotable: "bg-info/10 text-info border-info/20",
    failed: "bg-danger/10 text-danger border-danger/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    success: "bg-success/10 text-success border-success/20",
    neutral: "bg-muted/10 text-muted-foreground border-muted/20",
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${variants[status]}`}>
      {label}
    </span>
  );
}
