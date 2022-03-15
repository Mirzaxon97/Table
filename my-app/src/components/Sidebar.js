import React from "react";

export default function Sidebar(props) {
  return (
    <div className="card">

      <div className="card-l">

        <div className="box-l">Left Pane <br /> Top <br /> (splitter propagation)</div>
        <div className="box-l">Left Pane <br /> Middle <br /> (splitter propagation)</div>
        <div className="box-l">Left Pane <br /> Bottom <br /> (splitter propagation)</div>

      </div>

      <div className="card-m"><p>{props.name}</p></div>

      <div className="card-r">

        <div className="box-r">

          <div className="panel">Right Pane Upper-Left</div>
          <div className="panel">Right Pane Upper-Right</div>

        </div>

        <div className="box-r">Right Pane Bottom</div>

      </div>
    </div>
  );
}
