import smallLogo from "../../../assets/logo-pequeno.png";
import "./style.css";

export default function LogoHeader() {
  return (
    <div className="logo-header">
      <img className="small-logo" src={smallLogo} alt="logo"></img>
      <span className="logo-title">ZapRecall</span>
    </div>
  );
}
