// Mobile only — Bottom Tab Bar
type TabId = "home" | "shop" | "orders" | "account";

interface Tab {
  id: TabId;
  label: string;
}

interface TabBarProps {
  activeTab?: TabId;
  onTabChange?: (tab: TabId) => void;
}

const TABS: Tab[] = [
  { id: "home", label: "Home" },
  { id: "shop", label: "Shop" },
  { id: "orders", label: "Orders" },
  { id: "account", label: "Account" },
];

function MobileTabBar({ activeTab = "home", onTabChange }: TabBarProps) {
  return (
    <nav className="tabBar" aria-label="Bottom navigation">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className={`tabBar__tab${activeTab === tab.id ? " tabBar__tab--active" : ""}`}
          onClick={() => onTabChange?.(tab.id)}
          aria-current={activeTab === tab.id ? "page" : undefined}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export default MobileTabBar;
