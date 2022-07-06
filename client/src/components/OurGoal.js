import style from './OurGoal.css'
import { Link } from 'react-router-dom';

const OurGoal = () => {
  return (
    <section className="h-full my-24 mx-auto container">
      <h2 className="text-center text-5xl mb-5 font-light">The Goal</h2>
      <p className="font-thin text-center text-2xl w-1/2 mx-auto mb-5">
        To build a free resource to connect families and teachers with those that can afford to help their community.
      </p>
      <div className="flex items-center justify-around">
        <Link className='w-1/3 p-5' to="/borrow">
        <div className="flex items-center justify-center flex-col">
          <div className="borrow-container my-3"></div>
          <p className="text-2xl">Borrow</p>
          <p className="font-thin">Browse supplies in your area</p>
        </div>
        </Link>
        <Link className='w-1/3 mx-5 p-5' to="/offer">
        <div className="flex items-center justify-center flex-col">
          <div className="offer-container my-3"></div>
          <p className="text-2xl">Offer</p>
          <p className="font-thin">Post supplies that you have to offer</p>
        </div>
        </Link>
        <Link className='w-1/3 p-5' to="/borrow">
        <div className="flex items-center justify-center flex-col">
          <div className="ask-container my-3"></div>
          <p className="text-2xl">Ask</p>
          <p className="font-thin">Post an ad looking for something specific</p>
        </div>
        </Link>
      </div>
    </section>
  );
};

export default OurGoal;
