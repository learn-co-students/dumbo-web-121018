import React from "react";

const Home = props => {
  return (
    <div>
      <h1>Hi {props.user.username}</h1>
      <h1>Welcome to "🧀"</h1>
    </div>
  );
};

export default Home;
