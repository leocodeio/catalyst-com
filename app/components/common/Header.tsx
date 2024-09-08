import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { useLoaderData } from "@remix-run/react";
import { UserData } from "../../model/user-data";

const Header = () => {
  const user = useLoaderData<UserData>();

  const loginIconStyle: React.CSSProperties = {
    color: "#ffed00",
    backgroundColor: "black",
    borderRadius: "50px",
    padding: "3px",
    width: "30px",
    height: "30px",
    transform: user ? "" : "scaleX(-1)",
  };

  return (
    <div className="header-glass-effect fixed w-full flex items-center justify-between h-[75px] shadow-md z-50 px-8">
      {/* <h1>{user.id}</h1> */}
      <div>
        <img
          src="./images/logo.png"
          alt="Catalyst"
          className="h-[75px] w-[150px]"
        />
      </div>
      {!(user.id === "") ? (
        <Link className="flex align-center gap-2" to="/login">
          Login/Logout
          <AiOutlineLogin style={loginIconStyle} />
        </Link>
      ) : (
        <Link className="flex align-center gap-2" to="/login">
          Login/Logout
          <AiOutlineLogin style={loginIconStyle} />
        </Link>
      )}
    </div>
  );
};

export default Header;
