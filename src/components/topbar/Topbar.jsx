import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchbarIcon" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        <Link to = "/"><span className="topbarLink">Home</span></Link>
        <Link to = "/timeline"><span className="topbarLink">TimeLine</span></Link>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Person />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
        <div className="topbarIcons">
          <Chat />
          <span className="topbarIconBadge">1</span>
        </div>
        </div>
        <div className="topbarIconItem">
        <div className="topbarIcons">
          <Notifications />
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      </div>
          <img src="/assets/person/raj.jpg" alt="" className="topbarImg" />
        </div>
    </div>
  );
}
