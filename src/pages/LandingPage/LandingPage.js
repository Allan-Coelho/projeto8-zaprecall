import logo from "../../assets/logo.png";
import QuestionPage from "../QuestionPage/QuestionPage";
import "./style.css";
import ReactDOM from "react-dom";

export default function LandingPage() {
  function renderQuestionPage() {
    ReactDOM.render(<QuestionPage />, document.querySelector(".root"));
  }

  return (
    <>
      <div className="container">
        <img className="large-logo" src={logo} alt="logo"></img>
        <span className="logo-title">ZapRecall</span>
        <div className="start-button" onClick={renderQuestionPage}>
          Iniciar Recall!
        </div>
      </div>
    </>
  );
}
