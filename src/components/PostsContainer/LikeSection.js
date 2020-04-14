// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'

const LikeSection = ({likes}) => {
const [numberOfLikes, setNumberOfLikes] = useState(likes) 
  const getPopular = (event) => {
    setNumberOfLikes(numberOfLikes + 1)
    event.target.style.color = "red"
  }

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} onClick={getPopular} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment}  />
        </div>
      </div>
  <p className="like-number">{numberOfLikes}</p>
    </div>
  )
};

export default LikeSection;
