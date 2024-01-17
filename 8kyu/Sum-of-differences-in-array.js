function sumOfDifferences(arr) {
    let sum = 0
    arr.sort((x, y) => x - y)
    for(i=0; i < arr.length -1 ; i+=1) {
        sum += Math.abs(arr[i] -  arr[i + 1])
    }
    return sum
  }