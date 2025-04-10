import React, { ReactNode } from "react";
import { useNavigate } from "react-router";
import "./style.scss";

interface IExerciseLayoutProps {
  children: ReactNode;
}

const ExerciseLayout = (props: IExerciseLayoutProps) => {
  const { children } = props;

  const navigate = useNavigate();

  const onBackToHome = () => navigate("/");

  return (
    <div className="exercise-layout">
      <button onClick={onBackToHome} className="back-btn">
        Back to Home
      </button>
      {children}
    </div>
  );
};

export default ExerciseLayout;
