class Node{
    constructor(data = null, left = null, right = null){
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree{
    constructor(arr){
        let soretdArr = mergeSort(arr)
        this.root = this.buildTree(soretdArr)
    }

    buildTree(arr){
    
        if(arr.length === 0) return null

        let mid = Math.floor(arr.length / 2)
        const node = new Node(arr[mid])
    
        node.left = this.buildTree(arr.slice(0, mid))
        node.right = this.buildTree(arr.slice(mid + 1))
        
        return node
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

  let newTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

console.log(newTree)