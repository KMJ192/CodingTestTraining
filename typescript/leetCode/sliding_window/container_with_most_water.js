"use strict";
//input : integer type array
//output : number(size)
//constraint 
// - n === height.length
// - 2 <= n <= 10^5
// - 0 <= height[i] <= 10^4
//Edge Case
//DS
exports.__esModule = true;
exports.run = void 0;
function maxArea(height) {
    var maxSize = 0;
    var pointer = {
        front: 0,
        back: height.length - 1
    };
    while (pointer.front < pointer.back) {
        maxSize = Math.max(maxSize, (pointer.back - pointer.front) * Math.min(height[pointer.front], height[pointer.back]));
        if (height[pointer.front] < height[pointer.back])
            pointer.front++;
        else
            pointer.back--;
    }
    return maxSize;
}
// 시간 초과
function maxArea_fail(height) {
    var maxSize = 0;
    for (var i = 0; i < height.length; i++) {
        for (var j = i; j < height.length; j++) {
            var len = j - i;
            if (height[i] > height[j]) {
                maxSize = Math.max(maxSize, height[j] * len);
            }
            else {
                maxSize = Math.max(maxSize, height[i] * len);
            }
        }
    }
    return maxSize;
}
function run() {
    var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    //let height: number[] = [1, 2, 6, 2, 5, 4, 1, 3, 1];
    //let height: number[] = [1, 2]; // => 1
    //let height: number[] = [2, 1]; // => 1
    //let height: number[] = [0, 2]; // => 0
    //let height: number[] = [1, 2, 4, 3]; // => 4
    //let height: number[] = [2,3,4,5,18,17,6]; // => 17
    console.log(maxArea(height));
    //console.log(maxArea_fail(height));
}
exports.run = run;
//    f                    b
//[1, 8, 6, 2, 5, 4, 8, 3, 7]
// 0  8  0  2  15 16 40 18 49
// f  b
//[1, 8, 6, 2, 5, 4, 8, 3, 7]
//if(front < back) 둘다이동?
//     |
//     | |
//   | | |
// | | | | => 4
//   |
// | | |   => 2
//   |
// | |     => 1
// |  
// | |     => 1
//   |
//   |     => 0
