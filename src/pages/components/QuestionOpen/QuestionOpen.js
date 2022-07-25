import "./style.css";
import littleArrow from "../../../assets/setinha.png";
import React from "react";

function QuestionOption({
  option,
  setIsTurnedOver,
  setTitleStyle,
  setIsOpen,
  setIsAnswer,
  setStatusBar,
  statusBar,
}) {
  function userAnswerHandler(event) {
    const button = event.target;
    const buttonValue = button.innerText;

    if (buttonValue === "Zap!") {
      setTitleStyle("remember");
      setIsOpen(false);
      setIsAnswer(true);
      statusBar.answers.push("remember");
    }

    if (buttonValue === "Não lembrei") {
      setTitleStyle("dontRemember");
      setIsOpen(false);
      setIsAnswer(true);
      statusBar.answers.push("dontRemember");
    }

    if (buttonValue === "Quase não lembrei") {
      setTitleStyle("barelyRemember");
      setIsOpen(false);
      setIsAnswer(true);
      statusBar.answers.push("barelyRemember");
    }
    setStatusBar({ ...statusBar });
  }

  switch (option) {
    case false:
      return (
        <div className="question-buttons">
          <div
            className="remember-button"
            onClick={(event) => userAnswerHandler(event)}
          >
            Zap!
          </div>
          <div
            className="barely-remember-button"
            onClick={(event) => userAnswerHandler(event)}
          >
            Quase não lembrei
          </div>
          <div
            className="dont-remember-button"
            onClick={(event) => userAnswerHandler(event)}
          >
            Não lembrei
          </div>
        </div>
      );
    case true:
      return (
        <div className="question-buttons">
          <img
            src={littleArrow}
            alt="setinha"
            onClick={() => {
              setIsTurnedOver(false);
            }}
          />
        </div>
      );

    default:
      return (
        <div onClick={setIsTurnedOver} className="question-buttons">
          <img
            src={littleArrow}
            alt="setinha"
            onClick={() => {
              setIsTurnedOver(false);
            }}
          />
        </div>
      );
  }
}

export default function QuestionOpen({
  question,
  answer,
  setTitleStyle,
  setIsOpen,
  setIsAnswer,
  setStatusBar,
  statusBar,
}) {
  const [isTurnedOver, setIsTurnedOver] = React.useState(true);

  return (
    <>
      {isTurnedOver ? (
        <span className={"question-content"}>{question}</span>
      ) : (
        <span className={"question-content"}>{answer}</span>
      )}

      <QuestionOption
        option={isTurnedOver}
        setIsTurnedOver={setIsTurnedOver}
        setTitleStyle={setTitleStyle}
        setIsOpen={setIsOpen}
        setIsAnswer={setIsAnswer}
        setStatusBar={setStatusBar}
        statusBar={statusBar}
      />
    </>
  );
}
