//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 




const PostsPage = ({ data }) => {
  // set up state for your data
console.log(data)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
    {
    data.map(user => {
      return <Post userData={user} />
    })
    }
    </div>
  );
};

export default PostsPage;
