const removeFromArray = function(arr, input) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == input) {
            arr.splice(i, 1);            
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
