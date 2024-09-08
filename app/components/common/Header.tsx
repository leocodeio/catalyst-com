import { Link } from "@remix-run/react";
import { IoLogOut } from "react-icons/io5";

const Header = () => {

  return (
    <div className="header-glass-effect fixed w-full flex items-center justify-between h-[75px] shadow-md z-50 px-8">
      {/* <h1>{user.id}</h1> */}
      <Link to="/home">
        <img
          src="./images/logo.png"
          alt="Catalyst"
          className="h-[75px] w-[150px]"
        />
      </Link>
      <Link className="flex align-center gap-2" to="/login">
        <IoLogOut className="h-[30px] w-[30px]" style={{ color: "yellow" }} />
      </Link>
    </div>
  );
};

export default Header;
