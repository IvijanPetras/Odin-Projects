window.onload = () => {
    
    var twoSum = function(nums, target) {
        let twoSum = []
        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                console.log(i,j)
                if(nums[i] + nums[j] === target){
                    return twoSum = [i , j]
                } 
            }
        }
    
        return twoSum
    };

    var twoSum2 = function(arr, target) {
        let sumArr = []
        let hashArr = {}
        for(let i = 0; i < arr.length; i++){
           hashArr[i] = arr[i]
        }
        console.log(hashArr)
        for(let i = 0; i < arr.length; i++){
            let sum = target - arr[i];
            if(hashArr[sum] !== null && hashArr[sum] !== i ){
               sumArr.push(i)
               sumArr.push(hashArr[sum])
            }
        }
        return sumArr
        
    };

    console.log(twoSum2([1, 3, 10, 11, 14], 13))
}