
const NavBar: React.FC = () => {
  return (
      <div className="container">
        <div className="nav-con">
          <div className="logo">
            <a href="#">Kwanpeemai Puengchai</a>
          </div>
          <ul className="menubar">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#edu">Education</a>
            </li>
            <li>
              <a href="#project">My Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default NavBar;
