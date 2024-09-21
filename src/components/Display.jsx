import React from 'react'
import { useState,useEffect } from 'react'
import InsertionSort from './algorithms/InsertionSort.jsx';
import SelectionSort from './algorithms/SelectionSort.jsx';
import {QuickSort} from './algorithms/QuickSort.jsx';
import  {MergeSort}  from './algorithms/MergeSort.jsx';
import { SWAP } from './utility/constants.js';

const Display = ({algorithm,arraySize,speed}) => 
{
  const [array,setArray] = useState([]);

  useEffect(()=>{
    const newArray = Array.from({length:arraySize},()=>Math.floor(Math.random()*100)+1);
    setArray(newArray);
  },[arraySize]);

  useEffect(()=>{
    const sortArray = async() =>
    {
        let moves;
        if(algorithm === 'Bubble Sort')
          moves = await QuickSort(array,array.length);
        else if(algorithm === 'Insertion Sort')
          moves = await InsertionSort(array,array.length);
        else if(algorithm === 'Selection Sort')
          moves = await SelectionSort(array,array.length);
        else if(algorithm === 'Merge Sort')
          moves = await MergeSort(array,array.length);
        else
          moves = await QuickSort(array,array.length);
        animateSorting(moves);
    };
    if(algorithm)
      sortArray();
  },[algorithm,speed]);  

  const animateSorting = (moves) => {
    if (!moves) return;
  
    moves.forEach(([i, j, action], index) => {
      // Instead of using setTimeout for every single move, you can group moves
      // and update them less frequently
      if (index % Math.floor(1000 / speed) === 0) {
        requestAnimationFrame(() => {
          setArray((prevArray) => {
            const newArray = [...prevArray];
            if (action === SWAP) {
              [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
          });
        });
      }
    });
  };

  return (
    <>
    <div className='flex justify-center text-center items-center'>
        <div className='w-[780px] h-[580px] border border-slate-400 rounded-lg mt-10 shadow-sm shadow-slate-900 overflow-hidden'>
          {array.map((value,index)=>(
            <div 
            key = {index} 
            style={{
              height:`${value}%`,
              width:`${100/arraySize}%`,
              backgroundColor:'#6B5B95',
              display: 'inline-block',
              boxSizing: 'border-box',
              border: '1px solid white',
            }}
            />
          ))}
        </div>      
    </div>
    </>
  )
}

export default Display;
