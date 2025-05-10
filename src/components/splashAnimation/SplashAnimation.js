import React from "react";
import "./SplashAnimation.css";

const SplashAnimation = () => {
  return (
    <div className="splash-animation">
      <div className="laptop">
        <div className="laptop-screen">
          <div className="power-button"></div>
          <div className="code-animation">
            <pre>
              {`> npm init
> npm install react
> npm start

Building portfolio...

[==========] 100%

Ready!`}
              <span className="cursor"></span>
            </pre>
          </div>
        </div>
        <div className="laptop-base">
          <div className="keyboard-backlight"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashAnimation;
