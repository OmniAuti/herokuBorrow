import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./HeroCoa.css";
import HeroSectionBuildingBlocks from "./HeroSectionBuildingBlocks";
import React from "react";

const HeroCOA = () => {
  // WORDS ARRAYS
  const words = [
    { id: 1, item: "pencil", color: "text-red-500" },
    { id: 2, item: "notebook", color: "text-blue-500" },
    { id: 3, item: "highlighter", color: "text-green-500" },
    { id: 4, item: "binder", color: "text-yellow-500" },
    { id: 5, item: "ruler", color: "text-pink-500" },
    { id: 6, item: "calculator", color: "text-slate-500" },
    { id: 7, item: "backpack", color: "text-purple-500" },
  ];

  const [word, setWord] = useState([]);
  const [transformInterval, setTransformInterval] = useState(0);
  const wordContainer = useRef(null);


  const handleTransform = (idx, interval) => {
    var opacityIdx = 1;

    interval = setInterval(() => {
      setTransformInterval(idx);
      idx++;
      opacityIdx -= 0.01;
      wordContainer.current.firstElementChild.style.opacity = opacityIdx;
      if (idx >= 100) {
        idx = 100;
      }
    }, 1);

    setTimeout(() => {
      clearInterval(interval);
      setTransformInterval(0);
    }, 1000);
  };

  // THIS IS FOR MOVING WORDS
  useEffect(() => {
    var handleTextInterval;
    var transformEl;

    setWord([words[0], words[1]]);
    var i = 1;
    var j = 2;

    handleTextInterval = setInterval(() => {
      var YIdx = 0;
      handleTransform(YIdx, transformEl);

      setTimeout(() => {
        const newArr = [words[i], words[j]];
        setWord(newArr);
        i++;
        j++;
        if (j >= words.length) {
          j = 0;
        }
        if (i >= words.length) {
          i = 0;
        }
      }, 1000);
    }, 3500);

    // CLEAN UP
    return () => {
      clearInterval(handleTextInterval);
      clearInterval(transformEl);
    };
  }, []);

  return (
    <section className="flex flex-col items-start  md:flex-row md:justify-around min-h-screen">
      <div className="w-full min-h-screen flex flex-col justify-evenly sm:items-start lg:w-2/3 mr-0 md:mr-5">
        <div className="md:w-full w-fit pr-5 md:pr-0 mx-auto sm:h-2/4 relative overflow-hidden pb-2">
          <h1
            id="h1-hero-xs"
            className=" whitespace-nowrap sm:text-8xl xl:text-9xl text-6xl font-extralight sm:tracking-wide pl-0 sm:pl-0 md:pl-16 pt-0"
          >
            <div className="">
              <h1 className="inline-block md:block">Can I</h1>
              <h1 className="inline-block md:block ml-3 sm:pl-3 md:pl-0 md:ml-0">
                borrow
              </h1>
              <h1 className="">
                a
                <div
                  ref={wordContainer}
                  className="inline-block w-fit absolute ml-2 sm:ml-5 hero-text-box overflow-hidden pb-72"
                >
                  {word.map((x) => (
                    <span
                      key={x.id}
                      style={{
                        transform: `translateY(-${transformInterval}%)`,
                        color: `${x.color}`,
                      }}
                      className={`${x.color} block `}
                    >
                      {x.item}
                      <span className={x.color}>?</span>
                    </span>
                  ))}
                </div>
              </h1>
            </div>
          </h1>
        </div>

        <div className="">
          <p className="xl:w-3/4 sm:mb-0 mt-0 text-center md:text-left md:pl-16 italic tracking-wide font-thin text-xl ">
            An easy and effortless community resource for those who are
            struggling to get the supplies they need to succeed in school
          </p>
        </div>

        <div className="mb-10 md:h-fit flex flex-col sm:flex-row item-center justify-evenly md:justify-start md:pl-16">
          <Link
            to="/borrow"
            className="text-center px-10 py-5 sm:text-2xl mt-2 md:mt-2 mb-2 md:mb-5 mx-5 md:mx-0 rounded-md hover:bg-sky-500 bg-sky-400 transition-colors"
          >
            Borrow Supplies
          </Link>
          <Link
            to="/offer"
            className="text-center px-10 py-5 sm:text-2xl mx-5 my-2 md:mb-5 md:mr-0 border-2 border-solid rounded-md border-sky-100 hover:border-green-500 transition-colors"
          >
            Offer Supplies
          </Link>
          <Link
            to="/ask-for"
            className="text-center px-10 py-5 sm:text-2xl mx-5 mt-2 md:mb-5 mb-2 md:mr-0 border-2 border-solid rounded-md border-sky-100 hover:border-red-500 transition-colors"
          >
            Ask For Supplies
          </Link>
        </div>
      </div>

      <HeroSectionBuildingBlocks />
    </section>
  );
};

export default HeroCOA;
