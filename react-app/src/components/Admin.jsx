import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../constants";
import "./Admin.css";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminHome from "./AdminHome";

const Admin = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const [user, setuser] = useState({});
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {}, []);
  useEffect(() => {
    if (!localStorage.getItem("token") || role === "user") {
      navigate("/login");
    } else {
      let url = API_URL + "/my-profile/" + localStorage.getItem("userId");
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          if (res.data.user) {
            setuser(res.data.user);
          }
        })
        .catch((err) => {
          alert("Server Err.");
        });
    }
  }, []);
  return (
    <div className="grid-container">
      <AdminHeader OpenSidebar={OpenSidebar} />
      <AdminSidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <AdminHome />
    </div>
  );
};

export default Admin;
