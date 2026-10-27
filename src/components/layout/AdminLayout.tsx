import { Outlet } from "react-router-dom";
import AdminSidebar from "../../features/admin/AdminSidebar";
import AdminTopBar from "../../features/admin/AdminTopBar";

function AdminLayout() {
  return (
    <div className="adminLayout">
      <AdminSidebar />
      <div className="adminLayout__main">
        <AdminTopBar />
        <main className="adminLayout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
