import { useState, useEffect, useRef } from "react";
import {Link} from 'react-router-dom'
import styles from "./HeroCoa.css";
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
      console.log("cleared");
    };
  }, []);

  return (
    <section className="">
      <div className="w-1/2 h-2/3 relative">
        <h1 className="text-8xl font-extralight tracking-wide pl-24 pt-16">
          <div>
            Can I <br></br>borrow<br></br>a
            <div
              ref={wordContainer}
              className=" inline-block absolute mx-5 hero-text-box overflow-hidden"
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
          </div>
        </h1>
      </div>
      <p className="my-10 pl-24 italic tracking-wide font-thin text-xl">
        An easy and effortless community resource for those who are
        <br></br>struggling to get the supplies they need to succeed in school
      </p>
      <div className="w-1/2 flex item-center justify-center">
        <Link to="/borrow" className="px-10 py-5 text-2xl mt-5 mx-5 rounded-md hover:bg-sky-500 bg-sky-400 transition-colors">
          Borrow Supplies
        </Link>
        <Link to="/offer" className="px-10 py-5 text-2xl mt-5 mx-5 border-2 border-solid rounded-md border-sky-100 hover:border-sky-500 transition-colors">
          Offer Supplies
        </Link>
      </div>
    </section>
  );
};

export default HeroCOA;
