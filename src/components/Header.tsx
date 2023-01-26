import React, {useState, useEffect} from 'react'
import classes from './Header.module.css'

const Header = () => {
  // Parallax effect for Header
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="home"
      className={classes.header}
      style={{ transform: `translateY(${offsetY * 0.5}px)` }}
    >
      <div className={classes["header-overlay"]}>
        <div
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
          className={classes["title-container"]}
        >
          <h1>Brock Dallman</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
      </div>
    </header>
  );
}

export default Header
