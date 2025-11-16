import { Link } from "react-router";
import logo from "/images/logo.png";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/home" className="home" href="#">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/catalog">Catalog</Link>
          <div id="user">
            <Link to="/addGame">Add Game</Link>
            <a href="#">Logout</a>
          </div>
          <div id="guest">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        </nav>
      </header>
    </>
  );
}
