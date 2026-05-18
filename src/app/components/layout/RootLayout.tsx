import { Outlet, NavLink } from "react-router";
import {
  LayoutDashboard,
  Repeat,
  Plus,
  Database,
  Layers,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Bot,
  Settings,
  Search,
  User
} from "lucide-react";

export function RootLayout() {
  return (
    <div className="flex h-screen bg-background text-foreground dark">
      <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-xl font-semibold text-sidebar-foreground">QLab Boss Console</h1>
          <p className="text-xs text-muted-foreground mt-1">量化研发控制台</p>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <NavItem to="/" icon={<LayoutDashboard size={18} />} label="总览 Cockpit" end />
          <NavItem to="/research" icon={<Repeat size={18} />} label="研究飞轮" />
          <NavItem to="/new-research" icon={<Plus size={18} />} label="新建研究" />
          <NavItem to="/data" icon={<Database size={18} />} label="数据管理" />
          <NavItem to="/universe" icon={<Layers size={18} />} label="Universe 管理" />
          <NavItem to="/factors" icon={<Sparkles size={18} />} label="因子与 Label" />
          <NavItem to="/strategies" icon={<TrendingUp size={18} />} label="策略库" />
          <NavItem to="/evidence" icon={<ShieldCheck size={18} />} label="证据链与 Gate" />
          <NavItem to="/agents" icon={<Bot size={18} />} label="Agent 协作" />
          <NavItem to="/settings" icon={<Settings size={18} />} label="系统设置" />
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-muted-foreground">
            <div>Workspace: Production</div>
            <div className="mt-1">v1.0.0</div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="搜索研究、策略、数据..."
                className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <User size={20} className="text-foreground" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label, end = false }: { to: string; icon: React.ReactNode; label: string; end?: boolean }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          isActive
            ? "bg-sidebar-accent text-sidebar-accent-foreground"
            : "text-sidebar-foreground hover:bg-sidebar-accent/50"
        }`
      }
    >
      {icon}
      <span className="text-sm">{label}</span>
    </NavLink>
  );
}
