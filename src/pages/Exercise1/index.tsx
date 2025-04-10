import React from "react";
import ExerciseLayout from "../../layout/Exercise";
import SetterComponent from "./components/Setter";
import ListenerComponent from "./components/Listener";

const Exercise1 = () => {
  return (
    <ExerciseLayout>
      <h1>Local Storage Handler</h1>
      <SetterComponent />
      <ListenerComponent />
    </ExerciseLayout>
  );
};

export default Exercise1;
