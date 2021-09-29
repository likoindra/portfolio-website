import React from "react";
import "./topbar.scss";

// Icon
// import {Person, Email} from '@mui/icons-material';
import { Person, Mail } from "@material-ui/icons";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            LIH.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+62 851 5623 8361</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>likoindrahartawan@gmail.com</span>
          </div>
        </div>
        <div className="right">
          {/* !menu Open do the oppsite atau kebalikan dari menu open jika menu open false maka aka terpanggil true */}
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
