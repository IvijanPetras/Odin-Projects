window.onload = () => {
    
    function sumRange(n, total){
        if(n <= 0){
            console.log('Thats it')
            return
        }
        console.log(n)
        return sumRange(n-1)
    }

    sumRange(4)

}