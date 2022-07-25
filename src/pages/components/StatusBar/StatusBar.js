import "./style.css";

const styles = {
  dontRemember: { color: "#FF3030" },
  remember: { color: "#2FBE34" },
  barelyRemember: { color: "#FF922E" },
};

export default function StatusBar({ statusBar, setStatusBar }) {
  let answers;
  let isCompleted = false;
  let completedMessage;
  const isEverythingOkay = (x) => x !== "dontRemember";

  if (statusBar.answers.length !== 0) {
    answers = statusBar.answers;
  } else {
    answers = [];
  }

  function answerToIcon(rawAnswer, index) {
    if (rawAnswer === "dontRemember") {
      return (
        <ion-icon
          name="close-circle"
          key={index}
          style={styles.dontRemember}
        ></ion-icon>
      );
    }

    if (rawAnswer === "remember") {
      return (
        <ion-icon
          name="checkmark-circle"
          key={index}
          style={styles.remember}
        ></ion-icon>
      );
    }

    if (rawAnswer === "barelyRemember") {
      return (
        <ion-icon
          name="help-circle"
          key={index}
          style={styles.barelyRemember}
        ></ion-icon>
      );
    }
  }

  const processedAnswers = answers.map((answer, index) => {
    return answerToIcon(answer, index);
  });

  if (processedAnswers.length === statusBar.length) {
    isCompleted = true;
    completedMessageBuilder();
  }

  function completedMessageBuilder() {
    if (answers.every(isEverythingOkay)) {
      completedMessage = (
        <>
          <span className="bold">🥳 Parabéns</span>
          <span>Você não esqueceu de nenhum flashcard!</span>
        </>
      );
    } else {
      completedMessage = (
        <>
          <span className="bold">😥 Putz...</span>
          <span>Ainda faltam alguns... {`\n`}Mas não desanime!</span>
        </>
      );
    }
  }

  return (
    <div className="status-bar-container">
      <>
        {isCompleted === true ? completedMessage : ""}
        <span>{`${
          processedAnswers.length !== undefined ? processedAnswers.length : 0
        }/${statusBar.length} CONCLUÍDOS`}</span>
        <span>{processedAnswers !== undefined ? processedAnswers : ""}</span>
      </>
    </div>
  );
}
