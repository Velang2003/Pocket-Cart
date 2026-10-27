interface AdminTopBarProps {
  title?: string;
}

function AdminTopBar({ title = "Dashboard" }: AdminTopBarProps) {
  return (
    <header className="adminTopBar">
      <h1 className="adminTopBar__title">{title}</h1>
      <div className="adminTopBar__actions">
        <span className="adminTopBar__user">Admin</span>
      </div>
    </header>
  );
}

export default AdminTopBar;
