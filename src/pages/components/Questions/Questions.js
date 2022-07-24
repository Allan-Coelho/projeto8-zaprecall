import "./style.css";
import QuestionClosed from "../QuestionClosed/QuestionClosed";
import QuestionOpen from "../QuestionOpen/QuestionOpen";
import React from "react";
const recalls = [
  [
    {
      question: "o que é pão 1",
      answer: "pão é bom 1",
      titleStatus: "unanswered",
    },
    {
      question: "o que é pão 2",
      answer: "pão é bom 2",
      titleStatus: "dontRemember",
    },
    {
      question: "o que é pão 3",
      answer: "pão é bom 3",
      titleStatus: "barelyRemember",
    },
    {
      question: "o que é pão 4",
      answer: "pão é bom 4",
      titleStatus: "remember",
    },
  ],
];

function sortRecalls() {
  recalls.map((recall) => {
    return recall.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  });
}

sortRecalls();

function Question({ question, answer, titleStatus, index }) {
  const [isOpen, setIsOpen] = React.useState(false);

  function openQuestion() {
    if (isOpen === false) {
      setIsOpen(true);
    }
  }

  return (
    <div
      className={`question ${isOpen ? "open" : "closed"}`}
      onClick={openQuestion}
    >
      {isOpen ? (
        <QuestionOpen answer={answer} question={question} />
      ) : (
        <QuestionClosed
          title={`Pergunta ${index + 1}`}
          titleStyle={titleStatus}
        />
      )}
    </div>
  );
}

export default function Questions() {
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
                index={index}
                key={index}
              />
            );
          })
        )}
      </div>
    </>
  );
}
