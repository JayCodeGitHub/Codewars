function sumOfDifferences(arr) {
    let sum = 0
    const sorted = arr.sort((x, y) => x - y) 
    
    for(i=0; i < sorted.length -1 ; i+=1) {
        sum += Math.abs(sorted[i] -  sorted[i + 1])
    }
    return sum
  }