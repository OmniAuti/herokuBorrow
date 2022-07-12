import styles from "./About.css";

const About = () => {
  return (
    <article id="about-home" className=" mx-auto scroll-mt-5">
      <div className=" min-h-fit w-3/4 mt-36 bg-sky-900 mx-auto rounded-md grid grid-cols-2 grid-rows-2 mb-4 relative">
        <div className="school-supplies-background absolute"></div>

        <div
          className="col-span-1 row-span-2 flex flex-col
        justify-center items-start px-5 pt-5 z-50"
        >
          <h2 className="text-3xl mb-5 font-light w-full text-center">
            Can I borrow a pencil?
          </h2>
          <p className="font-thin text-lg">
            A simple request from a student can often seem like nothing, but for
            some, it may present an underlying problem that faces families
            around the country.
          </p>
          <br></br>
          <p className="font-thin text-lg">
            In the United States there are an estimated 11.6 million children
            living below the poverty line. For these families, purchasing school
            supplies is not something that fits in their budget.
          </p>
        </div>

        <div className="col-span-1 row-span-2 flex items-center justify-center">
          <div className="border-solid border-2 border-sky-500 w-3/4 h-3/5 relative">
            <div className="border-solid border-2 border-sky-500 h-full w-full bg-sky-900 absolute right-5 top-5">
              <div className="w-full h-full text-center py-3 px-2">
                <h3 className="mb-4">
                  Cost of School Supplies<br></br>
                  <i>On Average</i>
                </h3>
                <div className="flex items-center justify-around">
                  <div className="w-1/5 mx-1">
                    <p className="font-thin text-left">Elementary</p>
                    <div className="bg-red-500">$1,017.37</div>
                  </div>
                  <div className="w-2/5 mx-1">
                    <p className="font-thin text-left">Middle School</p>
                    <div className="bg-blue-500">$1,277.35</div>
                  </div>
                  <div className="w-3/5 mx-1">
                    <p className="font-thin text-left">High School</p>
                    <div className="bg-green-500">$1,667.90</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full col-span-2 pb-5 px-5 row-span-1 z-50">
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

      <div className="flex items-center justify-around mx-auto px-10">
        <div className="bg-sky-900 w-1/2 h-80 rounded-md mr-2 relative overflow-hidden">
          <div className="cap-background absolute"></div>
          <div className="rounded-md p-5 absolute">
            <h2 className="text-2xl font-light mb-2 mt-0 text-center">
              What happens if a student is not prepared?
            </h2>
            <p className="font-thin">
              Students must be prepared to learn when they enter the classroom
              each and every day. Those that come to class without the adequate
              supplies tend to be less focused the lessons their teacher has
              planned for them. If a student doesn't have the supplies they need
              to complete their daily work, it can snowball into more than just
              below average grades.
            </p>
            <br></br>

            <div>
              <ul className="float-left text-center">
                <li className="underline underline-offset-1">
                  With Supplies:{" "}
                </li>
                <li className="my-1 font-thin">Higher Grade Average</li>
                <li className="my-1 font-thin">
                  Greater Attitude Towards Learning
                </li>
                <li className="my-1 font-thin">
                  Better Peer Relationships And Self-Image
                </li>
              </ul>

              <ul className="float-right text-center">
                <li className="underline underline-offset-1">
                  Without Supplies:
                </li>
                <li className="my-1 font-thin">
                  Less Inclined To Focus In Class
                </li>
                <li className="my-1 font-thin">
                  Susceptible To Ridicule From Classmates
                </li>
                <li className="my-1 font-thin whitespace-pre-wrap">
                  More Likely To Cause Classroom Disruptions
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-sky-900 w-1/2 h-80 rounded-md ml-2 relative">
          <div className="teacher-background absolute"></div>
          <div className="absolute w-full h-full p-5">
            <h3 className="text-2xl font-light mb-2 mt-0 text-center">
              What about the teachers?
            </h3>
            <p className="font-thin">
              The national average that teachers spend on classroom supplies is
              around $750 of their own money every year. 30% of teachers spend
              $1000 or more on supplies for their classrooms.
            </p>
            <br></br>

            <p>
              <i>Can't teachers just write off the expenses?</i>
            </p>
            <br></br>
            <p className="font-thin">
              Sadly, teachers can only deduct a maximum of $250 dollars with the
              <a href="https://www.irs.gov/taxtopics/tc458" target="_blank">
                {" "}
                <u>Educator Expense Deduction</u>
              </a>{" "}
              each year. It's unacceptable that we ask teachers to spend
              their own money to provide a quality learning enviroment. Teachers should be focused on helping
              students reach their full potential and not worrying if they have the
              supplies to complete each lesson.
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
