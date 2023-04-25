import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar, sx } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { grey } from "@mui/material/colors";
import {
  AccountCircle,
  LogoutOutlined,
  NotificationImportantOutlined,
  TuneOutlined,
} from "@mui/icons-material";
import "./SideBar.css";
function SideBar() {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="sideBar">
      <Sidebar
        defaultCollapsed="true"
        className="sideBar"
        backgroundColor="linear-gradient(359.7deg, rgba(7, 45, 86, 0.8) 20%, rgba(23, 127, 239, 0) 80%)"
      >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon sx={{ color: grey[500] }} />}
            onClick={() => {
              collapseSidebar(true);
            }}
          >
            {" "}
            <h2>X-Defense</h2>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon sx={{ color: grey[500] }} />}>
            Home
          </MenuItem>
          <MenuItem
            bgcolor="black"
            icon={<AccountCircle sx={{ color: grey[500] }} />}
          >
            Profile
          </MenuItem>
          <MenuItem
            icon={<NotificationImportantOutlined sx={{ color: grey[500] }} />}
          >
            Notifications
          </MenuItem>
          <MenuItem icon={<TuneOutlined sx={{ color: grey[500] }} />}>
            Settings
          </MenuItem>
          <MenuItem icon={<LogoutOutlined sx={{ color: grey[500] }} />}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;
