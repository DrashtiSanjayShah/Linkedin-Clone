import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <LinkedInIcon color='primary' sx={{ fontSize: 45 }}/>
        {/* <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""></img> */}
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search"/>
        <img src=" " alt=""></img>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={MessageIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption avatar={true} title='me'/>

      </div>
    </div>
  );
}

export default Header;
