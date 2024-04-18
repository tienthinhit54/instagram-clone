import React, {useState} from 'react'
import "./Timeline.css";
import Post from "./posts/Post";
import Suggestions from "./Suggestions";
function Timeline() {
  const [posts, setPosts] = useState([
    {
      user:"leomessi",
      postImage:"https://assets.goal.com/images/v3/blt92fc101c4ec292c6/GettyImages-2148556804_(1).jpg?auto=webp&format=pjpg&width=1080&quality=60",
      likes: 450,
      timestamp:"2d",
    },
    {
      user:"neymar",
      postImage:"https://upload.wikimedia.org/wikipedia/commons/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg",
      likes: 450,
      timestamp:"1d",
    },
    {
      user:"CR7",
      postImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/640px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
      likes: 450,
      timestamp:"12h",
    }
  ])
  return (
    <div className='timeline'>
      <div className='timeline__left'>
        <div className='timeline__posts'>
         {posts.map((post)=>(
            <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp}/>
         ))}
        </div>
      </div>
      <div className='timeline__right'>
        <Suggestions/>
      </div>
    </div>
  )
}

export default Timeline