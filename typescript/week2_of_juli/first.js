"use strict";
// you're given two positive integers representing the width and height of a grid-shaped,
// rectangular graph.
// Write a function that returns the number of ways to reach the bottom rigth corner of the graph when starting at the top left graph.
// For example given the graph illustrated blow, with width = 2 and height = 3, there are three ways to reach the bottom rigth corner when starting at the top left corner
exports.__esModule = true;
exports.first = void 0;
// input => width = 2, height =3, output => 3
// input => width =4, height = 3, output => 4
// constraint width * height >= 2
// 
function run(width, height) {
    var max = Array.from(Array(height), function () { return Array(width).fill(0); });
    var currNum = 0;
    for (var i = 0; i < height; i++) {
        max[i][0] = 1;
    }
    currNum = 0;
    for (var i = 0; i < width; i++) {
        max[0][i] = 1;
    }
    for (var i = 1; i < height; i++) {
        for (var j = 1; j < width; j++) {
            max[i][j] = max[i - 1][j] + max[i][j - 1];
        }
    }
    console.log(max);
    return max[height - 1][width - 1];
}
function first() {
    var width = 2;
    var height = 3;
    console.log(run(width, height));
}
exports.first = first;
//1 2 => 1
//2 2 => 2
//2 3 => 3
//3 3 => 6
//3 4 => 10
//4 4 => 20
//4 5 => 35
//5 5 => 70
//5 6 => 126
//6 6 => 252
//6 7 => 462
//7 7 => 924
//7 8 => 1716
//8 8 => 3422
