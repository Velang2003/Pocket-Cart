import { NavLink } from "react-router-dom";

const MENU = [
  { label: "Dashboard", path: "/admin" },
  { label: "Products", path: "/admin/products" },
  { label: "Orders", path: "/admin/orders" },
  { label: "Customers", path: "/admin/customers" },
];

function AdminSidebar() {
  return (
    <aside className="adminSidebar">
      <p className="adminSidebar__brand">Admin</p>
      <nav>
        {MENU.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `adminSidebar__link${isActive ? " adminSidebar__link--active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSidebar;
