import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/layout/RootLayout";
import { CockpitPage } from "./pages/CockpitPage";
import { ResearchFlywheelListPage } from "./pages/ResearchFlywheelListPage";
import { ResearchFlywheelDetailPage } from "./pages/ResearchFlywheelDetailPage";
import { NewResearchWizardPage } from "./pages/NewResearchWizardPage";
import { DataManagementPage } from "./pages/DataManagementPage";
import { UniverseManagementPage } from "./pages/UniverseManagementPage";
import { FactorLabelPage } from "./pages/FactorLabelPage";
import { StrategyLibraryPage } from "./pages/StrategyLibraryPage";
import { StrategyDetailPage } from "./pages/StrategyDetailPage";
import { EvidenceGatePage } from "./pages/EvidenceGatePage";
import { AgentCollaborationPage } from "./pages/AgentCollaborationPage";
import { SystemSettingsPage } from "./pages/SystemSettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: CockpitPage },
      { path: "research", Component: ResearchFlywheelListPage },
      { path: "research/:id", Component: ResearchFlywheelDetailPage },
      { path: "new-research", Component: NewResearchWizardPage },
      { path: "data", Component: DataManagementPage },
      { path: "universe", Component: UniverseManagementPage },
      { path: "factors", Component: FactorLabelPage },
      { path: "strategies", Component: StrategyLibraryPage },
      { path: "strategies/:id", Component: StrategyDetailPage },
      { path: "evidence", Component: EvidenceGatePage },
      { path: "agents", Component: AgentCollaborationPage },
      { path: "settings", Component: SystemSettingsPage },
    ],
  },
]);
