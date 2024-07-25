import React, { useState } from "react";
import "../layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  const userMenu = [
    { name: "Home", path: "/", icon: "ri-home-line" },
    { name: "Appointments", path: "/appointments", icon: "ri-file-list-line" },
    { name: "Apply Doctor", path: "/apply-doctor", icon: "ri-nurse-line" },
    { name: "Profile", path: "/profile", icon: "ri-profile-line" },
  ];

  const adminMenu = [
    { name: "Home", path: "/", icon: "ri-home-line" },
    { name: "Users", path: "/users", icon: "ri-user-line" },
    { name: "Doctors", path: "/doctors", icon: "ri-nurse-line" },
    { name: "Profile", path: "/profile", icon: "ri-profile-line" },
  ];

  const menuToBeRendered = user?.isAdmin ? adminMenu : userMenu;

  return (
    <div className="main">
      <div className="d-flex layout">
        <div className={`sidebar ${collapsed ? "collapsed-sidebar" : ""}`}>
          <div className="sidebar-header">
            {collapsed ? (
              <span className="sidebar-abbreviation">GC</span>
            ) : (
              <h1>Gestor de Citas Maria Auxiliadora</h1>
            )}
          </div>
          <div className="menu">
            {userMenu.map((menu, index) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  key={index}
                  className={`d-flex menu-item ${
                    isActive ? "active-menu-item" : ""
                  }`}
                >
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}

            <div className={`d-flex menu-item `}onClick={() => {
              localStorage.clear() 
              navigate("/login")
            }}>
              <i className='ri-logout-circle-line'></i>
              {!collapsed && <Link to="/login">Cerrar Sesión</Link>}
            </div>
          </div>
        </div>
        <div className="content">
          <div className="header">
            <i
              className={`ri-${
                collapsed ? "menu-line" : "close-line"
              } header-action-icon`}
              onClick={() => setCollapsed(!collapsed)}
            ></i>

            <div className="d-flex alighn-items-center px-4">
              <i className="ri-notification-line header-action-icon px-3"></i>
              <Link className="anchor" to="/profile">
                {user?.name}
              </Link>
            </div>
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
