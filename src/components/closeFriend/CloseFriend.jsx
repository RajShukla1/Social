import React from 'react'
import "./closeFriend.css";
import { showImage } from '../utils/showImage';

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
      <span className="imageContainer">
        <span className="profileImage hide">{user.username[0]}</span>
        <img className="sidebarFriendImg" src={user.profilePicture} onError={(e)=>showImage(e)} alt="friendimg" />
        </span>
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
