window.onload = () => {
  var twoSum = function (nums, target) {
    let twoSum = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        console.log(i, j);
        if (nums[i] + nums[j] === target) {
          return (twoSum = [i, j]);
        }
      }
    }

    return twoSum;
  };

  var twoSum2 = function (arr, target) {
    let sumArr = [];
    let hashArr = {};
    for (let i = 0; i < arr.length; i++) {
      hashArr[i] = arr[i];
    }
    console.log(hashArr);
    for (let i = 0; i < arr.length; i++) {
      let sum = target - arr[i];
      if (hashArr[sum] !== null && hashArr[sum] !== i) {
        sumArr.push(i);
        sumArr.push(hashArr[sum]);
      }
    }
    return sumArr;
  };

  // console.log(twoSum2([1, 3, 10, 11, 14], 13))

  var isPalindrome = function (x) {
    let isValid = true;
    let arr = String(x).split("").map((num)=>{
        return Number(num)
      })
    console.log(arr.length)
    if(isNaN(arr[0])) return false
    if(arr.length === 2 && arr[0] !== arr[1]) return false
    function isEven() {
      if (arr.length % 2 === 0) return arr.length / 2
       return Math.round(arr.length / 2) + 1
    }
    
    console.log(isEven())
    for (let i = 0; i < isEven(); i++) {
        if (x[i] !== x[x.length - 1 - i]) {
            isValid = false
        } 
    }
    return isValid
  };

  console.log(isPalindrome(100));
};
