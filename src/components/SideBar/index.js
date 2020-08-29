import React from "react";
import { Link } from "react-router-dom";

import { FiHome, FiFile, FiEdit3, FiList } from "react-icons/fi";

function SideBar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div className="sidebar-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <FiHome size={16} id="icons" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/arquivos">
                  <FiFile size={16} id="icons" />
                  Arquivos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lista-de-arquivos">
                  <FiList size={16} id="icons" />
                  Lista de Arquivos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/editor">
                  <FiEdit3 size={16} id="icons" />
                  Editor
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
