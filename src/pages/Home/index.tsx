import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Home = () => {
  return (
    <div className="home-page">
      <h1>React Level 3 Certification Submission</h1>
      <h5>Completed by Le Ha Minh Trung</h5>
      <div className="navigation-bar">
        <Link to={"/exercise-1"}>Exercise 1</Link>
        <Link to={"/exercise-2"}>Exercise 2</Link>
        <Link to={"/exercise-3"}>Exercise 3</Link>
      </div>
    </div>
  );
};

export default Home;
