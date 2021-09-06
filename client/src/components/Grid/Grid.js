import React from "react";
import "./Grid.css";
const Grid = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 header"></div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-1 m-2 mid1"></div>
        <div className="col-md-2 m-2 mid2"></div>
        <div className="col-md-4 m-2 mid3">
          <div className="col-md-2 bmid"></div>
        </div>
        <div className="col-md-4 m-2 mid4"></div>
      </div>
      <div className="row">
        <div className="col-md-12 footer"></div>
      </div>
    </>
  );
};

export default Grid;
