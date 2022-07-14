import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [aboutLocation, setAboutLocation] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setAboutLocation(true);
      return;
    }
    setAboutLocation(false);
  }, [location]);

  return (
    <header className="h-24 flex items-center w-full bg-black ">
      <div className="ml-10 w-3/5 h-full p-2 ">
        <Link className="pl-5  w-fit h-full group  cursor-pointer flex items-center font-thin" to="/">
          <img className="h-full" alt="Borrow A Pencil Logo" src="./imgs/logo.svg" />{" "}
          <h2 className="ml-5 pr-5 before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 hover:before:opacity-100 after:opacity-100 hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-[0px] hover:after:w-[109px] after:bottom-0 after:right-[19px]  after:transition-[width] after:absolute after:bg-white hover:before:w-[109px] relative before:h-[2px] before:bottom-0 ">Borrow A Pencil</h2>
        </Link>
      </div>

      <nav className="w-2/5 h-full flex items-center float-right">
        <ul className="flex justify-around font-thin mx-10 w-full h-full">
          <li className="cursor-pointer grow flex items-center justify-center group">
            {aboutLocation ? (
              <Link
                className="group-hover:underline underline-offset-2 grow flex h-full items-center justify-center"
                to="/about"
              >
                About
              </Link>
            ) : (
              <a
                className="group-hover:underline underline-offset-2 grow flex h-full items-center justify-center"
                target="_self"
                href="#about-home"
              >
                About
              </a>
            )}
          </li>
          <li className="cursor-pointer grow flex items-center justify-center group">
            <Link
              className="group-hover:underline underline-offset-2 grow flex h-full items-center justify-center"
              to="/borrow"
            >
              Borrow
            </Link>
          </li>
          <li className="cursor-pointer grow flex items-center justify-center group">
            <Link
              className="group-hover:underline underline-offset-2 grow flex h-full items-center justify-center"
              to="/offer"
            >
              Offer
            </Link>
          </li>
          <li className="cursor-pointer grow flex items-center justify-center group">
            <Link
              className="group-hover:underline underline-offset-2 grow flex h-full items-center justify-center"
              to="/ask"
            >
              Ask
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mr-10 cursor-pointer hover:underline underline-offset-2 h-full terxt-center w-fit flex items-center justify-center">
        Account
      </div>
    </header>
  );
};

export default Header;
