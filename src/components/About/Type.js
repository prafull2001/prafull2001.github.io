import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "full stack developer",
          "vinyl collector",
          "fiscal hobbyist",
          "writer of poetry",
          "nature enthusiast",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
