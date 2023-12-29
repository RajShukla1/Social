 import { Favorite, Comment, MoreVert, ThumbUp } from "@mui/icons-material";
import "./post.css";
import {Users} from "../../dummyData";
import { useState } from "react";
import { showImage } from "../utils/showImage";

export default function Post({ post }) {
    const [user] = Users.filter(u=>u.id === post.userId)
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = () =>{
        setLike(isLiked? like-1:like+1);
        setIsLiked(!isLiked);
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <span className="imageContainer">
                    <span className="profileImage hide">{user.username[0]}</span>
                    <img src={user.profilePicture} alt="" onError={(e)=>showImage(e)} className="postProfileImg" />
                    </span>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg"  src= {post.photo} />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUp htmlColor="darkgreen" className="likeIcon" onClick = {likeHandler}/>
                    <Favorite htmlColor="red" className="likeIcon" onClick = {likeHandler}/>
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments<Comment></Comment></span>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
