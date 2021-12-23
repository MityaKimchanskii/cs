const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
// perf.start();                     // Starts timer
// doublerAppend(extraLargeArray);
// let resultsAppend = perf.stop();  // Stops timer and save time results


// // Try it with second function
// perf.start();
// doublerInsert(extraLargeArray);
// let resultsInsert = perf.stop();

/////////////////////////////////////////////////////
// perf.start();                     
// doublerAppend(tinyArray);
// let resultsAppend = perf.stop();  


// perf.start();
// doublerInsert(tinyArray);
// let resultsInsert = perf.stop();

// perf.start();                     
// doublerAppend(smallArray);
// let resultsAppend = perf.stop();  


// perf.start();
// doublerInsert(smallArray);
// let resultsInsert = perf.stop();

// perf.start();                     
// doublerAppend(mediumArray);
// let resultsAppend = perf.stop();  


// perf.start();
// doublerInsert(mediumArray);
// let resultsInsert = perf.stop();

perf.start();                     
doublerAppend(largeArray);
let resultsAppend = perf.stop();  


perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();

console.log('Results for the largeArray');

// console.log('Results for the mediumArray');
// console.log('Results for the smallArray');
// console.log('Results for the tinyArray');
// console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
