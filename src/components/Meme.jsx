import React from "react";
import Canvas from "./Canvas";

export default function Meme() {
  return (
    <div id="meme">
      <div className="container container-sub p-2 pt-5 pb-5">
        <h2 className="mb-5">In a nutshell:</h2>
        <div className="row">
          <div className="col-12 col-md-6 mb-5">
            <h3>How my team sees me</h3>
            <img src="images/me.jpg" alt="antonio" className="gif" />
          </div>
          <div className="col-12 col-md-6 mb-5">
            <h3>How my family sees me</h3>
            <img src="images/brain.jpg" alt="big-brain" className="gif" />
          </div>
          <div className="col-12 col-md-6 mb-5">
            <h3>How I see myself</h3>
            <img src="images/homer.gif" alt="homer-any-key" className="gif" />
          </div>
          <div className="col-12 col-md-6">
            <h3>How I really am</h3>
            <Canvas />
            <p>This is not a GIF, but <span style={{ color: "#66BFBF", fontWeight: "bold" }}>JavaScript magic</span> 🧙‍♂️! Notice how the background, the bug's position, and my war cry are chosen randomly?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
