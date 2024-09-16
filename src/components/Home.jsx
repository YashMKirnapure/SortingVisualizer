import React, { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-emerald-400 py-3">
        <h1 className="text-xl font-bold cursor-pointer hover:text-orange-500 duration-150">
          Sorting Visualizer
        </h1>
      </div>

      <div className="flex flex-col justify-evenly items-center bg-slate-300 py-4">
        <div className="space-x-3 text-lg font-medium cursor-pointer">
          <span className="border-2 px-2 py-1 rounded-md bg-orange-300 outline-none ">
            Generate Array
          </span>

          <button onClick={toggleDropdown}>Choose Algorithm</button>

          {isOpen && (
            <div className="border-2 px-2 py-1 rounded-md bg-orange-300 outline-none ">
              <ul className="py-1">
                <li>
                  <a href="#">Bubble Sort</a>
                </li>
                <li>
                  <a href="#">Selection Sort</a>
                </li>
                <li>
                  <a href="#">Insertion Sort</a>
                </li>
                <li>
                  <a href="#">Merge Sort</a>
                </li>
                <li>
                  <a href="#">Quick Sort</a>
                </li>
              </ul>
            </div>
          )}

          <button onClick={toggleDropdown}>Array Size</button>

          {isOpen && (
            <div className="border-2 px-2 py-1 rounded-md bg-orange-300 outline-none ">
              <ul className="py-1">
                <li>
                  <a href="#">Bubble Sort</a>
                </li>
                <li>
                  <a href="#">Selection Sort</a>
                </li>
                <li>
                  <a href="#">Insertion Sort</a>
                </li>
                <li>
                  <a href="#">Merge Sort</a>
                </li>
                <li>
                  <a href="#">Quick Sort</a>
                </li>
              </ul>
            </div>
          )}

          <button onClick={toggleDropdown}>Speed</button>

          {isOpen && (
            <div className="border-2 px-2 py-1 rounded-md bg-orange-300 outline-none ">
              <ul className="py-1">
                <li>
                  <a href="#">Bubble Sort</a>
                </li>
                <li>
                  <a href="#">Selection Sort</a>
                </li>
                <li>
                  <a href="#">Insertion Sort</a>
                </li>
                <li>
                  <a href="#">Merge Sort</a>
                </li>
                <li>
                  <a href="#">Quick Sort</a>
                </li>
              </ul>
            </div>
          )}

          {/* <span className="border-2 px-2 py-1 rounded-md bg-orange-300 outline-none ">Choose Algorithm</span>
          <span className="border-2 px-2 py-1 rounded-md bg-orange-300 outline-none ">Array Size</span>
          <span className="border-2 px-2 py-1 rounded-md bg-orange-300 outline-none ">Speed</span> */}

          <span className="border-2 px-2 py-1 rounded-md bg-orange-300 outline-none ">
            Sort
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
