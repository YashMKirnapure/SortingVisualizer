import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Home = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  
  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
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
          <button onClick={()=>toggleDropdown('dropdown1')}>
            <div className="border-2 px-2 border-slate-700 rounded-md bg-orange-300 outline-none flex">
            Choose Algorithm 
            <IoMdArrowDropdown className="ml-1 mt-1"/>
            </div>
            </button>

          {openDropdown === 'dropdown1' && (
            <div className="absolute z-10 mt-1 border-2 px-2 py-1 rounded-md bg-orange-300 outline-none w-full text-base">
              <ul className="py-1">              
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">Bubble Sort</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">Selection Sort</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">Insertion Sort</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">Merge Sort</a>
                </li>
                <li className="hover:bg-amber-600">
                  <a href="#">Quick Sort</a>
                </li>
              </ul>
            </div>
          )}
          </div>

          <div className="relative inline-block">
          <button onClick={()=>toggleDropdown('dropdown2')}>
            <div className="border-2 px-2 border-slate-700 rounded-md bg-orange-300 outline-none flex">
            Array Size 
            <IoMdArrowDropdown className="ml-1 mt-1"/>
            </div>
          </button>

          {openDropdown === 'dropdown2' && (
            <div className="absolute z-10 mt-1 border-2 px-2 py-1 rounded-md bg-orange-300 outline-none w-full text-base">
              <ul className="py-1">
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">5</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">10</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">15</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">20</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">30</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">40</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">50</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">75</a>
                </li>
                <li className=" hover:bg-amber-600">
                  <a href="#">100</a>
                </li>
              </ul>
            </div>
          )}
          </div>

          <div className="relative inline-block">
          <button onClick={()=>toggleDropdown('dropdown3')} >
            <div className="border-2 px-2 border-slate-700 rounded-md bg-orange-300 outline-none flex">
            Speed 
            <IoMdArrowDropdown className="ml-1 mt-1"/>
            </div>
          </button>

          {openDropdown === 'dropdown3' && (
            <div className="absolute z-10 mt-1 border-2 px-2 py-1 rounded-md bg-orange-300 outline-none w-full text-base">
              <ul className="py-1">
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">1.0x</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">2.0x</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">3.0x</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">4.0x</a>
                </li>
                <li className="border-b-2 border-slate-700 hover:bg-amber-600">
                  <a href="#">5.0x</a>
                </li>
                <li className="hover:bg-amber-600">
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
    </>
  );
};

export default Home;
