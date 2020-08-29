import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <Link className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/">
        Lar
      </Link>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <div className="btn-group">
            <a
              className="nav-link"
              href="0a.html"
              data-toggle="dropdown"
              data-display="static"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle"
                style={{ width: 35 }}
                src={
                  "https://avatars1.githubusercontent.com/u/61442899?s=60&v=4"
                }
                alt=""
              />
            </a>
            <div
              style={{ position: "absolute" }}
              className="dropdown-menu dropdown-menu-right dropdown-menu-lg-right"
            >
              <button className="dropdown-item" type="button"></button>
              <button className="dropdown-item" type="button">
                Deslogar/ Sair
              </button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
