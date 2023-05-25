import "./useroptions.css";
import React, { useState } from "react";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Backdrop from '@mui/material/Backdrop';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../actions/userActions";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router";
const Useroptions = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  console.log("==USER IS", user);
  const [open, setOpen] = useState(false);
  const actions = [
    { icon: <ListItemIcon />, name: "Orders", func: Orders },
    { icon: <PersonIcon />, name: "Profile", func: profile },
    { icon: <LogoutIcon />, name: "Logout", func: logout },
  ];
  if (user.role === "admin") {
    actions.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: Dashboard,
    });
  }

  function Dashboard() {
    navigate("/dashboard");
  }
  function Orders() {
    navigate("/orders");
  }
  function profile() {
    navigate("/profile");
  }
  function logout() {
    dispatch(logoutUser());
    navigate('/')
    alert.success("Logout Sucessfully");
  }
  const handleBackdropClose=()=>{
    setOpen(!open);
  }

  return (
    <>
    <Backdrop open={open} style={{zIndex:'10'}}  onClick={handleBackdropClose}/>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        direction="down"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        className="speeddial"
        // sx={{ position: "absolute", top: " 20%", right: 16 }}
        icon={
          <img
            src={user.avatar.url ? user.avatar.url : "./profile.png"}
            alt="User Profile"
            className="pro_icon_head"
            style={{ width: "95%", height: "95%", borderRadius: "50%" }}
          />
        }
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            onClick={action.func}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default Useroptions;
