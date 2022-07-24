import "./style.css";
import littleArrow from "../../../assets/setinha.png";
import React from "react";

function QuestionOption({ option, setIsTurnedOver }) {
  switch (option) {
    case false:
      return (
        <div className="question-buttons">
          <div className="remember-button">Zap!</div>
          <div className="barely-remember-button">Quase não lembrei</div>
          <div className="dont-remember-button">Não lembrei</div>
        </div>
      );
    case true:
      return (
        <div className="question-buttons">
          <img
            src={littleArrow}
            alt="setinha"
            onClick={() => {
              console.log("pão");
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

export default function QuestionOpen({ question, answer }) {
  const [isTurnedOver, setIsTurnedOver] = React.useState(true);
  console.log(isTurnedOver);
  return (
    <>
      {isTurnedOver ? (
        <span className={"question-content"}>{question}</span>
      ) : (
        <span className={"question-content"}>{answer}</span>
      )}

      <QuestionOption option={isTurnedOver} setIsTurnedOver={setIsTurnedOver} />
    </>
  );
}
