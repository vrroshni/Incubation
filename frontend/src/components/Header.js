import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Header() {
  const { user,logoutUser } = useContext(AuthContext);
  return (
    <div>
      <Link to="/">Home</Link>
      <span>|</span>
      {user ? (
        <button onClick={logoutUser}>Logout</button> ):
        (
        <Link to="/login">Login</Link> )
        }

      {user && <p>hello {user.username}</p>}
    </div>
  );
}

export default Header;
