function warnTheSheep(queue) {
const length = queue.length
  if(queue[length - 1] === "wolf") return "Pls go away and stop eating my sheep"
  else {
    for(i = 0; i <= length; i ++) {
      if (queue[i] === "wolf") return `Oi! Sheep number ${length - i  - 1}! You are about to be eaten by a wolf!`
    }
  }
}
