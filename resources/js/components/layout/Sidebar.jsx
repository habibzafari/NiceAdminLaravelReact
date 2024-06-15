import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">

          <li className="nav-item">
            <Link to='/dashboard' className="nav-link collapsed">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to='/user' className="nav-link collapsed">
              <i className="bi bi-grid"></i>
              <span>Users</span>
            </Link>
          </li>

        </ul>
    
      </aside>
    );
}

export default Sidebar;