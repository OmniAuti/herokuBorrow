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
        <Link className="px-5 w-fit h-full group  cursor-pointer flex items-center font-thin" to="/">
          <img className="h-full " alt="Borrow A Pencil Logo" src="./imgs/logo.svg" />{" "}
          <h2 className="ml-5 before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 group-hover:before:opacity-100 after:opacity-100 group-hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0 ">Borrow A Pencil</h2>
        </Link>
      </div>

      <nav className="w-2/5 h-full flex items-center float-right">
        <ul className="flex justify-around font-thin mx-10 w-full h-full">
          <li className="cursor-pointer grow flex items-center justify-center group">
            {aboutLocation ? (
              <Link
                className="grow flex h-full items-center justify-center"
                to="/about"
              >
                <p className="before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 group-hover:before:opacity-100 after:opacity-100 group-hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0">About</p>
              </Link>
            ) : (
              <a
                className="group-hover:underline underline-offset-2 grow flex h-full items-center justify-center"
                target="_self"
                href="#about-home"
              >
                <p className="before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 group-hover:before:opacity-100 after:opacity-100 group-hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0">About</p>
              </a>
            )}
          </li>
          <li className="cursor-pointer grow flex items-center justify-center group">
            <Link
              className="grow flex h-full items-center justify-center"
              to="/borrow"
            >
              <p className="before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 group-hover:before:opacity-100 after:opacity-100 group-hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0">Borrow</p>
            </Link>
          </li>
          <li className="cursor-pointer grow flex items-center justify-center group">
            <Link
              className="grow flex h-full items-center justify-center"
              to="/offer"
            >
              <p className="before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 group-hover:before:opacity-100 after:opacity-100 group-hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0">Offer</p>
            </Link>
          </li>
          <li className="cursor-pointer grow flex items-center justify-center group">
            <Link
              className="grow flex h-full items-center justify-center"
              to="/ask"
            >
              <p className="before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 group-hover:before:opacity-100 after:opacity-100 group-hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0">Ask</p>
            </Link>
          </li>
          <li className="cursor-pointer grow flex items-center justify-center group">
            <Link
              className="grow flex h-full items-center justify-center "
              to="/account"
            >
              <p className="font-normal before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 group-hover:before:opacity-100 after:opacity-100 group-hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0">Account</p>
            </Link>
          </li>
        </ul>
      </nav>
   
    </header>
  );
};

export default Header;
