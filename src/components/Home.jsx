import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Display from "./Display.jsx";

const Home = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [algorithm, setAlgorithm] = useState(null);
  const [arraySize, setArraySize] = useState(null);
  const [speed, setSpeed] = useState();
  const [generate, setGenerate] = useState(false);
  const [sort, setSort] = useState(false);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  const handleAlgorithmChange = (algorithm) => {
    setAlgorithm(algorithm);
    toggleDropdown("dropdown1");
  };

  const handleArraySizeChange = (size) => {
    setArraySize(size);
    toggleDropdown("dropdown2");
  };

  const handleSpeedChange = (speed) => {
    setSpeed(speed);
    toggleDropdown("dropdown3");
  };

  const handleGenerateArray = () => {
    setGenerate(true);
    setSort(false);
  };

  const handleSort = () => {
    setSort(true);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-emerald-400 py-3">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-orange-500 duration-150">
          Sorting Animator
        </h1>
      </div>

      <div className="flex flex-col justify-evenly items-center bg-yellow-500 py-6">
        <div className="space-x-3 text-lg font-medium cursor-pointer">
          <span
            className="border-2 px-2 py-2 border-slate-700 rounded-md bg-orange-300 outline-none"
            onClick={handleGenerateArray}
          >
            Generate Array
          </span>

          <div className="relative inline-block">
            <button onClick={() => toggleDropdown("dropdown1")}>
              <div className="border-2 px-2 py-2 border-slate-700 rounded-md bg-orange-300 outline-none flex">
                Algorithm: {algorithm || "Select"}
                <IoMdArrowDropdown className="ml-1 mt-1" />
              </div>
            </button>

            {openDropdown === "dropdown1" && (
              <div className="absolute z-10 mt-1 border-2 px-2 py-1 rounded-md bg-orange-300 outline-none w-full text-base">
                <ul className="py-1">
                  {[
                    "Bubble Sort",
                    "Selection Sort",
                    "Insertion Sort",
                    "Merge Sort",
                    "Quick Sort",
                  ].map((algo) => (
                    <li
                      key={algo}
                      className="border-b-2 border-slate-700 hover:bg-amber-600"
                      onClick={() => handleAlgorithmChange(algo)}
                    >
                      <a href="#">{algo}</a>
                    </li>
                  ))}
                  {/* <li
                    className="border-b-2 border-slate-700 hover:bg-amber-600"
                  >
                    <a href="#">Bubble Sort</a>
                  </li>
                  <li
                    className="border-b-2 border-slate-700 hover:bg-amber-600"
                    onClick={() => handleAlgorithmChange("Selection Sort")}
                  >
                    <a href="#">Selection Sort</a>
                  </li>
                  <li
                    className="border-b-2 border-slate-700 hover:bg-amber-600"
                    onClick={() => handleAlgorithmChange("Insertion Sort")}
                  >
                    <a href="#">Insertion Sort</a>
                  </li>
                  <li
                    className="border-b-2 border-slate-700 hover:bg-amber-600"
                    onClick={() => handleAlgorithmChange("Merge Sort")}
                  >
                    <a href="#">Merge Sort</a>
                  </li>
                  <li
                    className="hover:bg-amber-600"
                    onClick={() => handleAlgorithmChange("Quick Sort")}
                  >
                    <a href="#">Quick Sort</a>
                  </li> */}
                </ul>
              </div>
            )}
          </div>

          <div className="relative inline-block">
            <button onClick={() => toggleDropdown("dropdown2")}>
              <div className="border-2 px-2 py-2 border-slate-700 rounded-md bg-orange-300 outline-none flex">
                Array Size: {arraySize || "Select"}
                <IoMdArrowDropdown className="ml-1 mt-1" />
              </div>
            </button>

            {openDropdown === "dropdown2" && (
              <div className="absolute z-10 mt-1 border-2 px-2 py-1 rounded-md bg-orange-300 outline-none w-full text-base">
                <ul className="py-1">
                  {[5, 10, 15, 20, 30, 40, 50, 75, 100].map((size) => (
                    <li
                      key={size}
                      className="border-b-2 border-slate-700 hover:bg-amber-600"
                      onClick={() => handleArraySizeChange(size)}
                    >
                      <a href="#">{size}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative inline-block">
            <button onClick={() => toggleDropdown("dropdown3")}>
              <div className="border-2 px-2 py-2 border-slate-700 rounded-md bg-orange-300 outline-none flex">
                Speed: {speed}x
                <IoMdArrowDropdown className="ml-1 mt-1" />
              </div>
            </button>

            {openDropdown === "dropdown3" && (
              <div className="absolute z-10 mt-1 border-2 px-2 py-1 rounded-md bg-orange-300 outline-none w-full text-base">
                <ul className="py-1">
                  {[1.0,2.0,3.0,4.0,5.0,6.0].map((speedOption)=>(
                    <li 
                    key={speedOption}
                    className="border-b-2 border-slate-700 hover:bg-amber-600"
                    onClick={() => handleSpeedChange(1.0)}
                    >
                    <a href="#">{speedOption}x</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <span
            className="border-2 px-2 py-2 border-slate-700 rounded-md bg-orange-300 outline-none"
            onClick={handleSort}
          >
            Sort
          </span>
        </div>
      </div>

      {/* Passing the algo,size and speed to Display */}
      <Display algorithm={algorithm} arraySize={arraySize} speed={speed} />
    </>
  );
};

export default Home;
