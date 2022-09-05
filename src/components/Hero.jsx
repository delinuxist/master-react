import React from "react";

const Hero = ({ hero }) => {
  if (hero === "Joker") throw new Error("Not a hero");
  return <div>{hero}</div>;
};

export default Hero;
