import React from "react";

const Note = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.Title}</h1>
      <p>{props.Content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
};

export default Note;
