import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const location = useLocation();

  const handleActiveHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <header className="h-16 flex items-center w-full bg-black relative sm:overflow-y-hidden z-50">
      <div className="sm:w-3/5 w-3/4 h-full p-2">
        <Link
          className="sm:px-5 px-0 w-fit h-full group  cursor-pointer flex items-center font-thin"
          to="/"
        >
          <img
            className="h-full py-3 sm:p-0 transition-opacity"
            alt="Borrow A Pencil Logo"
            src="./imgs/logo.svg"
          />{" "}
          <h2 className="transition-opacity text-xl ml-2 sm:ml-5 before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 group-hover:before:opacity-100 after:opacity-100 group-hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0 ">
            Borrow A Pencil
          </h2>
        </Link>
      </div>

      <button
        onClick={() => handleActiveHamburger()}
        className={
          hamburger
            ? "sm:hidden flex w-[50px] h-full right-5 absolute justify-center items-end flex-col transition-all duration-500"
            : "sm:hidden flex w-[50px] h-full right-5 absolute justify-center flex-col transition-all duration-500"
        }
      >
        <div
          className={
            hamburger
              ? "bg-white h-[2.5px] w-1/2 rounded-2xl  rotate-12  my-0 transition-all duration-500"
              : "bg-white h-[2.5px] w-full rounded-2xl my-1 transition-all duration-500"
          }
        ></div>
        <div
          className={
            hamburger
              ? "bg-white h-[2.5px] w-full rounded-2xl  my-0 transition-all duration-500"
              : "bg-white h-[2.5px] w-full rounded-2xl  my-1 transition-all duration-500"
          }
        ></div>
        <div
          className={
            hamburger
              ? "bg-white h-[2.5px] w-1/2 rounded-2xl -rotate-12  my-0 transition-all duration-500"
              : "bg-white h-[2.5px] w-full rounded-2xl  my-1 transition-all duration-500"
          }
        ></div>
      </button>

      <nav
        className={
          hamburger
            ? "sm:w-2/5 w-1/2 flex items-center absolute right-0 h-screen top-0 border sm:border-0 bg-black transition-all duration-500 sm:relative"
            : "sm:w-2/5 w-1/2 h-screen sm:h-full flex items-center absolute sm:relative -right-80 sm:border-0 sm:-right-0 top-0 bg-black transition-all duration-500"
        }
      >
        <ul className="flex flex-col sm:flex-row justify-around font-thin w-full h-full">
          <button
            onClick={() => handleActiveHamburger()}
            className="sm:hidden h-[45px] relative order-1 sm:order-none"
          >
            <div
              className={
                hamburger
                  ? "w-[35px] bg-white h-[2.5px] rounded-xl absolute right-2 top-5 -rotate-45 delay-500 transition-all duration-500 opacity-100"
                  : "opacity-0 w-[35px] bg-white h-[2.5px] rounded-xl absolute right-2 top-5 rotate-0 delay-500 "
              }
            ></div>
            <div
              className={
                hamburger
                  ? "w-[35px] bg-white h-[2.5px] rounded-xl absolute right-2 top-5 rotate-45 delay-500 transition-all duration-500 opacity-100 "
                  : "opacity-0 w-[35px] bg-white h-[2.5px] rounded-xl absolute right-2 top-5 rotate-0 delay-500 "
              }
            ></div>
          </button>

          <li className="cursor-pointer grow flex items-center justify-center group order-last sm:order-none">
            {location.pathname !== "/" ? (
              <Link
                className="grow flex h-full items-center justify-center"
                to="/about"
              >
                <p
                  className={
                    location.pathname === "/about"
                      ? "text-xl sm:text-base underline underline-offset-2 decoration-2 decoration-inherit"
                      : "text-xl sm:text-base before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 group-hover:before:opacity-100 after:opacity-100 group-hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0"
                  }
                >
                  About
                </p>
              </Link>
            ) : (
              <a
                className="grow flex h-full items-center justify-center"
                target="_self"
                href="#about-home"
              >
                <p className="text-xl sm:text-base before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 group-hover:before:opacity-100 after:opacity-100 group-hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0">
                  About
                </p>
              </a>
            )}
          </li>
          <li className="cursor-pointer grow flex items-center justify-center group order-3 sm:order-none">
            <Link
              className="grow flex h-full items-center justify-center"
              to="/borrow"
            >
              <p
                className={
                  location.pathname === "/borrow"
                    ? "text-xl sm:text-base underline underline-offset-2 decoration-2 decoration-inherit"
                    : "text-xl sm:text-base before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 group-hover:before:opacity-100 after:opacity-100 group-hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0"
                }
              >
                Borrow
              </p>
            </Link>
          </li>
          <li className="cursor-pointer grow flex items-center justify-center group order-4 sm:order-none">
            <Link
              className="grow flex h-full items-center justify-center"
              to="/offer"
            >
              <p
                className={
                  location.pathname === "/offer"
                    ? "text-xl sm:text-base underline underline-offset-2 decoration-2 decoration-inherit"
                    : "text-xl sm:text-base before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 group-hover:before:opacity-100 after:opacity-100 group-hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0"
                }
              >
                Offer
              </p>
            </Link>
          </li>
          <li className="cursor-pointer grow flex items-center justify-center group order-5 sm:order-none">
            <Link
              className="grow flex h-full items-center justify-center"
              to="/ask"
            >
              <p
                className={
                  location.pathname === "/ask"
                    ? "text-xl sm:text-base underline underline-offset-2 decoration-2 decoration-inherit"
                    : "text-xl sm:text-base before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-0 group-hover:before:opacity-100 after:opacity-100 group-hover:after:opacity-0 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0"
                }
              >
                Ask
              </p>
            </Link>
          </li>
          <li className="cursor-pointer grow flex items-center justify-center group order-2 sm:order-none">
            <Link
              className="grow flex h-full items-center justify-center"
              to="/dashboard"
            >
              {location.pathname === "/dashboard" ? (
                <div className=" bg-white rounded-full">
                  <img
                    className="h-fit w-[30px]"
                    src="/imgs/userDashboard.svg"
                    alt="Account Icon"
                  />
                </div>
              ) : (
                <img
                  className="h-fit w-[30px]"
                  src="/imgs/user.svg"
                  alt="Account Icon"
                />
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
