import React from "react";
import "./Header.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-name">Conqoll</div>
      <div className="menu-items">
        <Link to="/">
          <Button className="button" variant="text" color="default">
            All
          </Button>
        </Link>
        <Link to="/shortlist">
          <Button className="button" variant="text" color="default">
            Shortlisted
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
