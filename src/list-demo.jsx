import React from 'react';
const a1 = [1,2,4];

function mapFunctionA(num){
    return num * 2;
}

function mapFunctionB(num){
    return <li>{num}</li>;
}


console.log(a1.map(mapFunctionA)); //2,4,8
console.log(a1.map(mapFunctionB)); //2,4,8

// noinspection JSUnusedLocalSymbols
const x = <ul>{  a1.map(mapFunctionB)  }</ul>;
