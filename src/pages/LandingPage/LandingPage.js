import logo from "../../assets/logo.png";
import QuestionPage from "../QuestionPage/QuestionPage";
import "./style.css";
import React from "react";

export default function LandingPage() {
  const [isStarted, setIsStarted] = React.useState(false);

  function renderQuestionPage() {
    setIsStarted(true);
  }

  return (
    <>
      {isStarted ? (
        <QuestionPage />
      ) : (
        <div className="container">
          <img className="large-logo" src={logo} alt="logo"></img>
          <span className="logo-title">ZapRecall</span>
          <div className="start-button" onClick={renderQuestionPage}>
            Iniciar Recall!
          </div>
        </div>
      )}
    </>
  );
}
