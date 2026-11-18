import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ to, children }) => (
  <div className="section-button-wrap">
    <Link to={to} className="section-button">
      {children}
    </Link>
  </div>
);

export default Button;
