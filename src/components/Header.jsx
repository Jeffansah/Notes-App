import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";

const Header = () => {
  return (
    <header>
      <h1>
        <EditNoteIcon style={{ fontSize: "30px" }} />
        Notes App
      </h1>
    </header>
  );
};

export default Header;
