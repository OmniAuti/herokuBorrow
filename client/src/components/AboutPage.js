const AboutPage = () => {
    return(<article id="about" className=" mx-auto scroll-mt-5">
    <div className="h-80 w-3/4 mt-36 bg-sky-900 mx-auto rounded-md grid grid-cols-2 grid-rows-2 mb-4 relative">
      <div
        className="col-span-1 row-span-2 flex flex-col
      justify-center items-start p-5"
      >
        <h2 className="text-3xl mb-5 font-light">Can I borrow a pencil?</h2>
        <p className="font-thin text-lg">
          A student asking to borrow any form of school supplies may seem like
          a simple request, but for some, it could be an underlying problem that
          faces families around the country.
        </p>
      </div>

      <div className="school-supplies-background absolute"></div>

      <div className="col-span-1 row-span-2 flex items-center justify-center">
        <div className="border-solid border-2 border-sky-500 w-3/4 h-1/2 relative">
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
    </div>

    <div className="flex items-center justify-around mx-auto px-10">
      <div className="bg-sky-900 w-1/2 h-80 rounded-md mr-2 p-5 relative overflow-hidden">
        <h3 className="text-2xl font-light mb-2 mt-0 text-center">
          Who needs help?
        </h3>
        <p className="font-thin">
          In the United States alone, there are an estimated 11.6 million
          children living below the poverty line. For these families,
          purchasing school supplies is not something that fits in their
          budget.
        </p>
        <div className="breaking-the-bank-background absolute"></div>
        <br></br>
        <p className="font-thin">
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

      <div className="bg-sky-900 w-1/2 h-80 rounded-md ml-2 p-5 relative">
        <h3 className="text-2xl font-light mb-2 mt-0 text-center">
          What about the teachers?
        </h3>
        <p className="font-thin">
          The national average that teachers spend on classroom supplies is
          around $750 of their own money every year. 30% of teachers spend
          $1000 or more on supplies.</p>
          <br></br>
          <div className="teacher-background absolute"></div>
          <i>Can't teachers just write off the expenses?</i>
          <br></br>
          <br></br>
          <p className="font-thin">
          Sadly, teachers can only deduct a maximum of $250 dollars with the
          Educator Expense Deduction each year. As an already underpaid profession, it's
          unacceptable that we ask teachers to keep spending their own money. We can do better.
          <br></br>
        </p>
      </div>
    </div>
  </article>)
}
export default AboutPage