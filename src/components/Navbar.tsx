import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 60) {
        // Scroll down
        setVisible(false);
      } else {
        // Scroll up
        setVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
      <div className="navbar-container">
        <h1 className="logo">Artevo.ID</h1>

        <button className="hamburger" onClick={toggleMenu}>
          <span>{isOpen ? '✖' : '☰'}</span>
        </button>

        <ul className={`menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#about"><b>About</b></a></li>
          <li><a href="#templates"><b>Templates</b></a></li>
          <li><a href="#pricing"><b>Pricing</b></a></li>
        </ul>
      </div>      
    </nav>
  );
};

export default Navbar;