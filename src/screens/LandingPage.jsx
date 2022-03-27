import React, { useState } from "react";
import "./LandingPage.css";

export function LandingPage() {
  const [counter, setCounter] = useState(0);
  return (
    <div id="landing-page">
      <a ref="/about">
        <div className="title label-hello on-hover"></div>
      </a>
      <div className="title label-about"></div>
      <div className="title second label-i-am on-hover"></div>
      <div className="title second label-tom on-hover"></div>
      <div className="bg-image"></div>
    </div>
  );
}
