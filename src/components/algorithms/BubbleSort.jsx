import React from 'react'
import {swap} from '../utility/swap.js';
import { SWAP } from '../utility/constants.js';

const BubbleSort = async(array,length) => 
{
    let moves = [];
    for(let i=0 ;i<length-1 ;i++)
    {
        for(let j=0 ;j<length-i-1 ;j++)
        {
            if(array[j]>arr[j+1])
            {
                await swap(arr,j,j+1);
                moves.push([j,j+1,SWAP]);
            }
            else
                moves.push([j,j+1,!SWAP]);
        }
    }
    return moves;
}

export default BubbleSort;
