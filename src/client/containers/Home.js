import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm the new home component!</div>
      <button onClick={() => console.log("Hi there!")}>Click here!</button>
    </div>
  );
};

export default {
  component: Home
};
