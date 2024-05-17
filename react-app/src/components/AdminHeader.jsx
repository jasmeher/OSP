import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function AdminHeader({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      {/* <div className="header-left">
        <BsSearch className="icon" />
      </div> */}
      <div className="header-right">
        <Link to="/my-profile" className="text-reset">
          <BsPersonCircle className="icon" />
        </Link>
      </div>
    </header>
  );
}

export default AdminHeader;
