import "./style.css";
import LogoHeader from "../components/LogoHeader/LogoHeader";
import Questions from "../components/Questions/Questions";
import React from "react";

const selectedRecallIndex = 0;
let recalls = [
  [
    {
      question: "O que é JSX?",
      answer: " Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __ ",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      question: "Componentes devem iniciar com __ ",
      answer: "letra maiúscula",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      question: " O ReactDOM nos ajuda __ ",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ],
];

function sortRecalls() {
  recalls.map((recall) => {
    return recall.sort(function () {
      return 0.5 - Math.random();
    });
  });
}

function limitRecalls() {
  recalls[selectedRecallIndex] = recalls[selectedRecallIndex].slice(0, 4);
}

limitRecalls();
sortRecalls();

export default function QuestionPage() {
  return (
    <>
      <LogoHeader />
      <div className="question-page-container">
        <Questions recalls={recalls} />
      </div>
    </>
  );
}
