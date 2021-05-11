import React from "react";

function NotePapper(props) {
    const { papperType, bodyClass, selectedType } = props;

  return (
    <div className="col-lg-3 col-xl-3 col-xxl-2 col-sm-6 col-6 col-md-3 text-center extra-mr">
      <div
        className={bodyClass}
        onClick={() => selectedType(papperType)}
      >
        <div className="plain-btn">
          <a className=" btn-rs btn  btn-clr  text-white">{papperType}</a>
        </div>
      </div>
    </div>
  );
}

export default NotePapper;
