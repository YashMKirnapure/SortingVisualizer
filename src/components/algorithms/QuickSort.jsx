import React from 'react'
import {swap} from '../utility/swap.js';
import {SWAP} from '../utility/constants.js';
import { preview } from 'vite';

export const QuickSort = async(array,length) => 
{
    let moves = [];
    await divider(array,moves,0,length-1);
    return moves;
};

const divider = async(array,moves,start,end) =>
{
    if(start < end)
    {
        let pivot = await partition(array,moves,start,end);
        await divider(array,moves,start,pivot-1);
        await divider(array,moves,pivot+1,end);
    }
};

const partition = async(array,moves,start,end) =>
{
    let prevIdx = start - 1;
    for(let index = start ;index<end ;index)
    {
        if(index!=end)
            moves.push([index,end,!SWAP]);
        if(array[index]<array[end])
        {
            prevIdx++;
            await swap(array,index,prevIdx);
            moves.push([index,prevIdx,SWAP]);
        }
    }
    await swap(array,prevIdx+1,end);
    moves.push([end,prevIdx+1,SWAP]);
    return prevIdx+1;
};