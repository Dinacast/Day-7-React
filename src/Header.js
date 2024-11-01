import React from "react";
import Proptypes from "prop-types";

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.children}</h1>
    </header>
  );
}

Header.proptypes = {
  children: Proptypes.string.isRequired
};

export default Header;
