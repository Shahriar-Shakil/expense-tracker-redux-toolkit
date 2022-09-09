import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="App">
      <div className="header">
        <Link style={{ textDecoration: "none", color: "#FFF" }} to={"/"}>
          <h1>Expense Tracker</h1>
        </Link>
      </div>

      <div className="main">
        <div className="container">{children}</div>
      </div>

      <div className="footer">&copy;2022 Learn with Sumit</div>
    </div>
  );
}
