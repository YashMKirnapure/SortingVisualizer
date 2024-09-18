import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Display from "./Display";

const Home = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(1.0);

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

  return (
    <>
      <div className="flex items-center justify-center bg-emerald-400 py-3">
        <h1 className="text-xl font-bold cursor-pointer hover:text-orange-500 duration-150">
          Sorting Animator
        </h1>
      </div>

      <div className="flex flex-col justify-evenly items-center bg-yellow-500 py-4">
        <div className="space-x-3 text-lg font-medium cursor-pointer">
          <span className="border-2 px-2 py-1 border-slate-700 rounded-md bg-orange-300 outline-none ">
            Generate Array
          </span>

          <div className="relative inline-block">
            <button onClick={() => toggleDropdown("dropdown1")}>
              <div className="border-2 px-2 border-slate-700 rounded-md bg-orange-300 outline-none flex">
                Choose Algorithm
                <IoMdArrowDropdown className="ml-1 mt-1" />
              </div>
            </button>

            {openDropdown === "dropdown1" && (
              <div className="absolute z-10 mt-1 border-2 px-2 py-1 rounded-md bg-orange-300 outline-none w-full text-base">
                <ul className="py-1">
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleAlgorithmChange('Bubble Sort')}>
                    <a href="#">Bubble Sort</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleAlgorithmChange('Selection Sort')}>
                    <a href="#">Selection Sort</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleAlgorithmChange('Insertion Sort')}>
                    <a href="#">Insertion Sort</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleAlgorithmChange('Merge Sort')}>
                    <a href="#">Merge Sort</a>
                  </li>
                  <li className="hover:bg-amber-600" onClick={()=>handleAlgorithmChange('Quick Sort')}>
                    <a href="#">Quick Sort</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative inline-block">
            <button onClick={() => toggleDropdown("dropdown2")}>
              <div className="border-2 px-2 border-slate-700 rounded-md bg-orange-300 outline-none flex">
                Array Size
                <IoMdArrowDropdown className="ml-1 mt-1" />
              </div>
            </button>

            {openDropdown === "dropdown2" && (
              <div className="absolute z-10 mt-1 border-2 px-2 py-1 rounded-md bg-orange-300 outline-none w-full text-base">
                <ul className="py-1">
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleArraySizeChange(5)}>
                    <a href="#">5</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleArraySizeChange(10)}>
                    <a href="#">10</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleArraySizeChange(15)}>
                    <a href="#">15</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleArraySizeChange(20)}>
                    <a href="#">20</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleArraySizeChange(30)}>
                    <a href="#">30</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleArraySizeChange(40)}>
                    <a href="#">40</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleArraySizeChange(50)}>
                    <a href="#">50</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleArraySizeChange(75)}>
                    <a href="#">75</a>
                  </li>
                  <li className=" hover:bg-amber-600" onClick={()=>handleArraySizeChange(100)}>
                    <a href="#">100</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative inline-block">
            <button onClick={() => toggleDropdown("dropdown3")}>
              <div className="border-2 px-2 border-slate-700 rounded-md bg-orange-300 outline-none flex">
                Speed
                <IoMdArrowDropdown className="ml-1 mt-1" />
              </div>
            </button>

            {openDropdown === "dropdown3" && (
              <div className="absolute z-10 mt-1 border-2 px-2 py-1 rounded-md bg-orange-300 outline-none w-full text-base">
                <ul className="py-1">
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleSpeedChange(1.0)}>
                    <a href="#">1.0x</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleSpeedChange(2.0)}>
                    <a href="#">2.0x</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleSpeedChange(3.0)}>
                    <a href="#">3.0x</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleSpeedChange(4.0)}>
                    <a href="#">4.0x</a>
                  </li>
                  <li className="border-b-2 border-slate-700 hover:bg-amber-600" onClick={()=>handleSpeedChange(5.0)}>
                    <a href="#">5.0x</a>
                  </li>
                  <li className="hover:bg-amber-600" onClick={()=>handleSpeedChange(6.0)}>
                    <a href="#">6.0x</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <span className="border-2 px-2 py-1 border-slate-700 rounded-md bg-orange-300 outline-none ">
            Sort
          </span>
        </div>
      </div>

      {/* Passing the algo,size and speed to Dispay */}
      <Display algorithm={algorithm} arraySize={arraySize} speed={speed}/>
    </>
  );
};

export default Home;
