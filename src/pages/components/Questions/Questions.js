import "./style.css";
import QuestionClosed from "../QuestionClosed/QuestionClosed";
import QuestionOpen from "../QuestionOpen/QuestionOpen";
import React from "react";
import StatusBar from "../StatusBar/StatusBar";

const selectedRecallIndex = 0;
function Question({ question, answer, setStatusBar, statusBar, index }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [titleStyle, setTitleStyle] = React.useState("unanswered");
  const [isAnswer, setIsAnswer] = React.useState(false);

  function openQuestion() {
    if (isOpen === false && isAnswer === false) {
      setIsOpen(true);
    }
  }

  return (
    <div
      className={`question ${isOpen ? "open" : "closed"}`}
      onClick={openQuestion}
    >
      {isOpen ? (
        <QuestionOpen
          answer={answer}
          question={question}
          setTitleStyle={setTitleStyle}
          setIsOpen={setIsOpen}
          setIsAnswer={setIsAnswer}
          statusBar={statusBar}
          setStatusBar={setStatusBar}
        />
      ) : (
        <QuestionClosed
          title={`Pergunta ${index + 1}`}
          titleStyle={titleStyle}
        />
      )}
    </div>
  );
}

export default function Questions({ recalls }) {
  const [statusBar, setStatusBar] = React.useState({
    length: recalls[selectedRecallIndex].length,
    answers: [],
  });

  return (
    <>
      <div className="question-container">
        {recalls.map((questions) =>
          questions.map((question, index) => {
            return (
              <Question
                question={question.question}
                answer={question.answer}
                titleStatus={question.titleStatus}
                setStatusBar={setStatusBar}
                statusBar={statusBar}
                index={index}
                key={index}
              />
            );
          })
        )}
      </div>
      <StatusBar statusBar={statusBar} setStatusBar={setStatusBar} />
    </>
  );
}
