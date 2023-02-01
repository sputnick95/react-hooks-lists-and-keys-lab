import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const renderA = links.map(link => <a key={link} href={`#${link}`}>{link}</a>)
  

  return (
  <nav>{renderA}</nav>
  )
}

export default NavBar;
