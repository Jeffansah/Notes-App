import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.Title}</h1>
      <p>{props.Content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
