import React from 'react'
import "./online.css";
import { showImage } from '../utils/showImage';
export default function Online ({user}) {
  return (
    <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
              <span className="imageContainer">
                    <span className="profileImage hide">{user.username[0]}</span>
                  <img src={user.profilePicture} alt="profilepic" onError={(e)=>{showImage(e)}} className="rightbarProfileImg" />
                </span>
                <span className="rightbarOnline">
                </span>
              </div>
              <span className="rightbarUsername">{user.username}</span>
            </li>
  )
}
