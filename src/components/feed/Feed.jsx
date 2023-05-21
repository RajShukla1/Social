
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import {Posts} from "../../dummyData";
export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {Posts.map(p=>(<Post key = {p.id} post = {p}/>))}
          {/* <Post postImg ={"assets/post/1.webp"} profileImg = {"/assets/person/1.jpg"}/>
          <Post postImg ={"assets/post/3.webp"} profileImg = {"/assets/person/2.jpg"}/>
          <Post postImg ={"assets/post/2.webp"} profileImg = {"/assets/person/3.jpg"}/>
          <Post postImg ={"assets/post/4.webp"} profileImg = {"/assets/person/4.jpg"}/>
          <Post postImg ={"assets/post/5.webp"} profileImg = {"/assets/person/5.jpg"}/>
          <Post postImg ={"assets/post/6.webp"} profileImg = {"/assets/person/6.jpg"}/>
          <Post postImg ={"assets/post/7.webp"} profileImg = {"/assets/person/1.jpg"}/> */}
      </div>
    </div>
  )
}
