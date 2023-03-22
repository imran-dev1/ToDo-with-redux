import React from "react";
import logo from "../assets/images/things-todo-logo.svg";

const Navbar = () => {
   return (
      <div className="py-20 text-center w-full header text-white font-bold text-lg flex justify-center">
         <a href="/">
            <img src={logo} alt="" style={{ maxWidth: "200px" }} />
         </a>
      </div>
   );
};

export default Navbar;
