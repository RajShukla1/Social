import { Cake } from "@mui/icons-material"
import "./rightbar.css"
import {Users} from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({profile}) {
  const HomeRightbar = ()=>{
    return(
    <>
    <div className="birthdayContainer">
            <Cake className="birthdayImg"/>
            <span className="birthdayText">
              <b>Pawan Shukla</b> and <b>3 other friends</b> have a birthday today
            </span>
            {/* <img src="" alt="" className="birthdayImg" /> */}
          </div>
          <img src="assets/ads/1.gif" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(u=>(
              <Online key={u.id} user = {u}/>
            ))}
          </ul>
    </>
    )}
  const ProfileRightbar = () =>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City: </span>
          <span className="rightbarInfoValue">Lucknow </span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From: </span>
          <span className="rightbarInfoValue">Jankipuram </span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship: </span>
          <span className="rightbarInfoValue">Committed </span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Nickname: </span>
          <span className="rightbarInfoValue">Naman </span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Dhawan Mishra</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Dhawan Mishra</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Dhawan Mishra</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Dhawan Mishra</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Dhawan Mishra</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Dhawan Mishra</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          {profile?<ProfileRightbar/>:<HomeRightbar/>}
        </div>
    </div>
  )
}
