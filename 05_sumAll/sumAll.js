const sumAll = function(a, b) {
    sum = 0;

    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }

    if (a > b) {
        for (let num = b; num <= a; num++) {
            sum += (num);
        }

        return sum;
    }
    else {
        for (let num = a; num <= b; num++) {
            sum += num;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
