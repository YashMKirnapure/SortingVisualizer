import React from "react";
import { swap } from "../utility/swap.js";
import { SWAP } from "../utility/constants";

const SelectionSort = async (array, length) => 
{
  let moves = [];
  for (let i = 0; i < length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
      moves.push([j, minIdx, !SWAP]);
    }
    await swap(array, i, minIdx);
    moves.push([i, minIdx, SWAP]);
  }
  return moves;
};

export default SelectionSort;
