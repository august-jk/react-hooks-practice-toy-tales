import React, { useState } from "react";

function ToyCard({ id, name, image, likes, onDelete, updateToys }) {
  const [likeCount, setLikeCount] = useState(likes)
  function handleLikes(id) {
    setLikeCount(likeCount + 1)
    updateLikes(id)
  }
  function updateLikes(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
      body: JSON.stringify({ likes: parseInt(likeCount)})
    })
    .then(updatedToy => updateToys(updatedToy))
  }
 
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likeCount} Likes </p>
      <button className="like-btn" onClick={() => handleLikes(id)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => onDelete(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
