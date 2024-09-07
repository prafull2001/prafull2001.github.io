import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "full stack developer",
          "systems engineer",
          "vinyl collector",
          "stock market enthusiast",
          "pickle ball player",
          "nature lover",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  );
}

export default Type;
