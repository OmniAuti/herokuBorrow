import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-36 w-screen bg-gray-900 grid grid-cols-3 grid-rows-4">
      <div className="border row-span-2 row-start-2 col-start-1 col-span-1 flex justify-center items-center text-3xl">
        <h2 className="text-center">Logo</h2>
      </div>
      <div className="font-thin col-start-2 row-span-4  flex justify-around items-center flex-col">
        <Link className="" to="/about">
          About
        </Link>
        <Link to="/borrow">Borrow</Link>
      </div>
      <div className="font-thin col-start-3 row-span-4 flex justify-around items-center flex-col">
        <Link to="/offer">Offer</Link>
        <Link to="/ask">Ask</Link>
      </div>
    </footer>
  );
};

export default Footer;
