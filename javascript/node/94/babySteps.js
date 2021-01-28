let total = 0;
process.argv.forEach((currentNum, i) => {
    if (i > 1) {
        total += +currentNum;
    }
    return total
});
console.log(total);

//use reduce instead of foreach?