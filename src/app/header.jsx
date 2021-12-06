import "./styles/app.css";
import Menu from "./components/menu";
import Logo from "./components/logo";
import Notification from "./components/notification";
function Header() {
  return (
    <header className="header">
      <Menu />
      <Logo />
      <Notification />
    </header>
  );
}

export default Header;
