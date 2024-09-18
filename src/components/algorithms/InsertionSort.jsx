import React from "react";
import { SWAP } from "../utility/constants";
import {swap} from "../utility/swap.js"

const InsertionSort = async (array, length) => 
{
  let moves = [];
  for (let i = 0; i < length - 1; i++) {
    let j = i;
    while (j >= 0 && array[j] > array[j + 1]) {
      await swap(array, j, j + 1);
      moves.push([j, j + 1, SWAP]);
      j--;
    }
  }
  return moves;
};

export default InsertionSort;
