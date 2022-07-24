import "./style.css";
import QuestionTitle from "../QuestionTitle/QuestionTitle";
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

function Question({ question, answer, titleStatus }) {
  return (
    <div className="question closed">
      {<QuestionTitle title={"pão"} titleStyle={titleStatus} />}
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
                key={index}
              />
            );
          })
        )}
      </div>
    </>
  );
}
