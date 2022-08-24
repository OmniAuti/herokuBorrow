import { Link } from "react-router-dom";

const EmptyFilteredSuppliesPlaceHolder = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="empty-supplies-array my-5"></div>

      <h2 className="text-2xl text-center">
        Oops! There seems to be no available supplies in your area or supplies that
        match your search criteria
      </h2>
      <p className="font-thin text-2xl my-5">
        Expand your filters and try again
      </p>
      <p className="text-2xl font-thin mb-5 text-center">
        If you're having no luck, try posting on the{" "}
        <Link
          to="/ask"
          className="underline underline-offset-4 hover:underline-offset-1"
        >
          Ask page
        </Link>{" "}
        to meet your needs
      </p>
    </div>
  );
};

export default EmptyFilteredSuppliesPlaceHolder;
