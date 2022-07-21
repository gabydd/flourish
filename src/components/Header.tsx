import titleLogo from "../assets/title_logo.png";
function Header() {
  return (
    <div className="flex items-center justify-center">
      <img src={titleLogo} className="h-72" alt="logo that reads Flourish" />
    </div>
  );
}

export default Header;
