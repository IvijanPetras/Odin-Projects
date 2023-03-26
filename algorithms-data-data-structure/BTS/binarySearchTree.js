class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(arr){
        this.arr = arr
        this.root = buildTree()
    }
}

function merge(left,right){
    let sortedArr = []
    while(left.length && right.length){
        if(left[0]===right[0]) right.shift()
        if(left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else  {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right) 
  }

function buildTree(arr){
    

}
console.log(mergeSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])) 
//console.log(buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]))