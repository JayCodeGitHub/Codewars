function points(games) {
    let result = 0
    games.forEach((item) => {
      if(item.charAt(0) > item.charAt(2)) {
        result += 3;
      } else if (item.charAt(0) == item.charAt(2)){
        result += 1;
      }
    })
    return result;
  }