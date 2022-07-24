export default function QuestionClosed({ title, titleStyle }) {
  const styles = {
    dontRemember: { color: "#FF3030", "text-decoration": "line-through" },
    remember: { color: "#2FBE34", "text-decoration": "line-through" },
    unanswered: {},
    barelyRemember: { color: "#FF922E", "text-decoration": "line-through" },
  };

  switch (titleStyle) {
    case "dontRemember":
      return (
        <>
          <div className={"title"} style={styles.dontRemember}>
            {title}
          </div>
          <ion-icon name="close-circle" style={styles.dontRemember}></ion-icon>
        </>
      );
    case "remember":
      return (
        <>
          <div className={"title"} style={styles.remember}>
            {title}
          </div>
          <ion-icon name="checkmark-circle" style={styles.remember}></ion-icon>
        </>
      );
    case "unanswered":
      return (
        <>
          <div className={"title"} style={styles.unanswered}>
            {title}
          </div>
          <ion-icon name="play-outline" style={styles.unanswered}></ion-icon>
        </>
      );
    case "barelyRemember":
      return (
        <>
          <div className={"title"} style={styles.barelyRemember}>
            {title}
          </div>
          <ion-icon name="help-circle" style={styles.barelyRemember}></ion-icon>
        </>
      );
    default:
      return (
        <>
          <div className={"title"} style={styles.unanswered}>
            {title}
          </div>
          <ion-icon name="play-outline" style={styles.unanswered}></ion-icon>
        </>
      );
  }
}
