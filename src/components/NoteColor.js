import React from "react";

function NoteColor(props) {
    const {papperColor, selectedColor, bodyClass} = props;

  return (
    <div className={bodyClass} onClick={() => {selectedColor(papperColor)}}></div>
  );
}

export default NoteColor;
