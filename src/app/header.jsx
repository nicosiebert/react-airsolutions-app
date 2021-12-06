import "./styles-mobile/app.css";
import Menu from "./components/menu";
import Logo from "./components/logo";
function Header() {
  return (
    <header className="header">
      <Menu />
      <Logo />
    </header>
  );
}

export default Header;
