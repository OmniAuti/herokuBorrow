import { Link } from "react-router-dom";

const EmptySuppliesPlaceHolder = () => {
    return ( <div className=" mt-10 mx-auto text-center flex items-center justify-around flex-col">
    <div className="empty-supplies-array my-5"></div>

    <h2 className="text-2xl my-5 font-light">
      Sorry, there appears to be no one offering supplies in your area
    </h2>
    <p className="text-2xl font-thin">
      Try posting on the{" "}
      <Link
        to="/ask"
        className="underline underline-offset-4 hover:underline-offset-1"
      >
        Ask page
      </Link>{" "}
      to meet your needs
    </p>
  </div>)
}

export default EmptySuppliesPlaceHolder;