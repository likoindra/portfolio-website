import React, { useEffect, useRef } from "react";
import "./intro.scss";
// ityped
import { init } from "ityped";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Junior Frontend Developer"],
      backDelay: 1500,
      backSpeed: 50,
    });
    // console.log(textRef)
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/image.jpg" alt="" />
        </div>
        {/* <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Liko Indra H</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a> */}
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Liko Indra H</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
