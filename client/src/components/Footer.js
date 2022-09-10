import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-32 w-screen bg-black grid grid-cols-4 grid-rows-4 px-5">
      <div className="row-span-2 row-start-2 col-start-1 col-span-1 flex justify-center items-center">
        <Link
          className=" w-fit h-full cursor-pointer flex items-center font-thin group"
          to="/"
        >
          <img
            className="h-full"
            alt="Borrow A Pencil Logo"
            src="./imgs/logo.svg"
          />{" "}
          <h2 className="ml-5 hidden sm:block text-base md:text-2xl before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-100 group-hover:before:opacity-0 after:opacity-0 group-hover:after:opacity-100 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0">
            Borrow A Pencil
          </h2>
        </Link>
      </div>
      <div className="font-thin col-start-2 col-span-1 row-span-4  flex justify-around items-center flex-col">
        <Link
          className=" group w-full h-full flex items-center justify-center"
          to="/about"
        >
          <p className="before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-100 group-hover:before:opacity-0 after:opacity-0 group-hover:after:opacity-100 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0">About</p>
        </Link>
   
      </div>
      <div className="font-thin col-start-3 row-span-4 flex justify-around items-center flex-col">
      <Link
          className="group w-full h-full flex items-center justify-center"
          to="/borrow"
        >
          <p className="before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-100 group-hover:before:opacity-0 after:opacity-0 group-hover:after:opacity-100 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0">Borrow</p>
        </Link>
        <Link
          className="group w-full h-full flex items-center justify-center"
          to="/offer"
        >
          <p className="before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-100 group-hover:before:opacity-0 after:opacity-0 group-hover:after:opacity-100 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0">Offer</p>
        </Link>
      </div>
      <div className="font-thin col-start-4 row-span-4 flex justify-around items-center flex-col">
      <Link
          className="group w-full h-full flex items-center justify-center"
          to="/asked"
        >
          <p className="text-center before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-100 group-hover:before:opacity-0 after:opacity-0 group-hover:after:opacity-100 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0 whitespace-nowrap">Asked For</p>
        </Link>
        <Link
          className="group w-full h-full flex items-center justify-center"
          to="/ask-for"
        >
          <p className="before:absolute before:w-0 before:bg-white before:transition-[width] before:opacity-100 group-hover:before:opacity-0 after:opacity-0 group-hover:after:opacity-100 before:duration-500 after:duration-500 before:origin-left before:left-0 after:origin-right after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:right-0  after:transition-[width] after:absolute after:bg-white group-hover:before:w-full relative before:h-[2px] before:bottom-0">Ask For</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
