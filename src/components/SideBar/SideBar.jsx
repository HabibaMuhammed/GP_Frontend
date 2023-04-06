import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  AccountCircle,
  ColorizeOutlined,
  LogoutOutlined,
  NotificationImportantOutlined,
  TuneOutlined,
} from "@mui/icons-material";
import "./SideBar.css";
import { white } from "@mui/material/colors";
function SideBar() {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="sideBar">
      <Sidebar
        defaultCollapsed="true"
        className="sideBar"
        backgroundColor="#AE67FA"
      >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar(true);
            }}
          >
            {" "}
            <h2>X-Defense</h2>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<AccountCircle />}>Profile</MenuItem>
          <MenuItem icon={<NotificationImportantOutlined />}>
            Notifications
          </MenuItem>
          <MenuItem icon={<TuneOutlined />}>Settings</MenuItem>
          <MenuItem icon={<LogoutOutlined />}>Logout</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;
