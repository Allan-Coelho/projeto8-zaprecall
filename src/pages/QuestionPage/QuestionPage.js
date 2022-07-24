import "./style.css";
import LogoHeader from "../components/LogoHeader/LogoHeader";
import Questions from "../components/Questions/Questions";

export default function QuestionPage() {
  return (
    <div className="question-page-container">
      <LogoHeader />
      <Questions />
    </div>
  );
}
