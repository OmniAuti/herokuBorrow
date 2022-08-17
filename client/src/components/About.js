import styles from "./About.css";

const About = () => {
  return (
    <article id="about-home" className=" mx-auto scroll-mt-5">
      <div className=" min-h-fit -ml-5 w-screen sm:w-full sm:-ml-0 bg-sky-900 md:mx-auto sm:rounded-md grid grid-cols-2 grid-rows-2 mb-4 relative mt-10">
        <div className="school-supplies-background absolute top-1/3 h-2/3 sm:top-1/2"></div>

        <div
          className="col-span-2 xl:col-span-1 xl:row-span-2 flex flex-col
        justify-center items-start px-5 pt-5"
        >
          <h2 className="text-3xl mb-5 font-light w-full text-center z-10">
            Borrow for good
          </h2>
          <p className="font-thin text-lg z-10">
            A simple request from a student can often seem like nothing, but for
            some, it may represent an underlying problem that faces families
            around the country. Getting supplies for the classroom can be an
            expensive and simply unatainable as the school year carries on. We're here
            to connect those that can afford to give a little to help those that
            need a little.
          </p>
          <br></br>
          <p className="font-thin text-lg z-10">
            In the United States there are an estimated 11.6 million children
            living below the poverty line. For these families, purchasing school
            supplies is not something that fits in the budget.
          </p>
        </div>

        <div className="col-span-2 xl:col-span-1 xl:row-span-2 flex items-center justify-center px-10 xl:px-0">
          <div className="border-solid border-2 border-sky-500 w-5/6 xl:w-3/4 bg-sky-900 h-72 sm:h-3/4 md:max-h-[200px] relative">
            <div className="border-solid border-2 border-sky-500 h-full w-full bg-sky-900 absolute right-5 top-5">
              <div className="w-full h-full text-center py-5 px-2">
                <h3 className="mb-3">
                  Cost of School Supplies<br></br>
                  <i>On Average</i>
                </h3>
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="sm:w-1/5 w-full mx-1">
                    <p className="font-thin sm:text-left mb-1 text-center">
                      Elementary
                    </p>
                    <div className="bg-red-500 py-1 min-w-fit mx-auto sm:mx-0 px-4 sm:px-0 w-1/5 sm:w-full">
                      $1,017.37
                    </div>
                  </div>
                  <div className="sm:w-2/5 w-full mx-1">
                    <p className="font-thin sm:text-left text-center mb-1 xl:whitespace-nowrap">
                      Middle School
                    </p>
                    <div className="bg-blue-500 py-1 mx-auto sm:mx-0 min-w-fit px-8 sm:px-0 w-2/5 sm:w-full">
                      $1,277.35
                    </div>
                  </div>
                  <div className="sm:w-3/5 w-full mx-1">
                    <p className="font-thin sm:text-left text-center mb-1">
                      High School
                    </p>
                    <div className="bg-green-500 py-1 mx-auto sm:mx-0 min-w-fit px-10 sm:px-0 w-3/5 sm:w-full">
                      $1,667.90
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full col-span-2 pb-5 px-5 row-span-1 z-10">
          <br></br>
          <p className="font-thin text-lg">
            According to a
            <a
              target="_blank"
              href="https://www.lendingtree.com/credit-cards/study/back-to-school-spending-leads-many-into-debt/#:~:text=1%20in%203%20parents%20of,school%20supplies%20as%20expenses%20increase."
            >
              <i> 2021 study by Lending Tree</i>
            </a>
            , 1 in 3 parents of school-age children expect to go into debt when
            shopping for back-to-school supplies. For parents with children
            attending schools that require hybrid learning due to the pandemic,
            42% believe they'll go in debt while paying for school supplies.
          </p>
        </div>
      </div>
    </article>
  );
};

export default About;
