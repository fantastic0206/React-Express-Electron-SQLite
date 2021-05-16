import React, { useEffect, useState } from "react";

function NoteDoc(props) {
  const { papperType, backColor, docContent } = props;

  const [bodyClass, setBodyClass] = useState();
  const [bodyStyle, setBodyStyle] = useState({});
  const [noteContent, setNoteContent] = useState();

  useEffect(() => {
    if (papperType === "Plain") {
      setBodyClass("create p-4 rounded-bg box-shadow extra-wd crp-wd");
      setBodyStyle(backColor);
    } else if (papperType === "Lined") {
      setBodyClass("create p-4 rounded-bg box-shadow lined-bg crp-wd");
      setBodyStyle(
        `linear-gradient(#e6e1e1 0.9px, transparent 0.9px, ${backColor} 0.9px)`
      );
    } else if (papperType === "Grid") {
      setBodyClass("create p-4 rounded-bg box-shadow grid-bg crp-wd");
      setBodyStyle(
        `linear-gradient(#e6e1e1 0.9px, transparent 0.9px), linear-gradient(to right, #e6e1e1 0.9px, ${backColor} 0.9px)`
      );
    } else if (papperType === "Dotted") {
      setBodyClass("create p-4 rounded-bg box-shadow dott-bg crp-wd");
      setBodyStyle(`radial-gradient(#8c8787 1px, ${backColor} 0.5px)`);
    }
    if (docContent) setNoteContent(docContent);
  }, [papperType, backColor]);

  return (
    <>
      {noteContent ? (
        <div
          className={bodyClass}
          style={
            papperType === "Plain"
              ? { backgroundColor: bodyStyle }
              : { backgroundImage: bodyStyle }
          }
          dangerouslySetInnerHTML={{ __html: noteContent }}
        ></div>
      ) : (
        <div
          className={bodyClass}
          style={
            papperType === "Plain"
              ? { backgroundColor: bodyStyle }
              : { backgroundImage: bodyStyle }
          }
        >
          <div className="plain-btn">
            <a className=" btn-rs btn btn-clr text-white">{papperType}</a>
          </div>
        </div>
      )}
    </>
  );
}

export default NoteDoc;
