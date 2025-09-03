const fibonacci = function(n) {
    if(n < 0) return "OOPS";
    if(n == 0) return 0;

    let arr = [0, 1];
    for(let i = 2; i <= n; i++) {
            arr.push(arr[0] + arr[1]);
            arr.shift();
        }
    return arr[arr.length - 1];
    }


// Do not edit below this line
module.exports = fibonacci;
