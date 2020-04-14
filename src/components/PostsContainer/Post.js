// You will add code in this file
import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = ({ userData }) => {
  // set up state for the likes

  return (
    <div className="post-border">
      <PostHeader username={userData.username} thumbnailUrl={userData.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={userData.imageUrl} />
      </div>
      <LikeSection />
      <CommentSection postId={userData.imageUrl} comments={userData.comments} />
    </div>
  );
};

export default Post;
