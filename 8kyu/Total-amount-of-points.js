function points(games) {
    let result = 0
    games.forEach((item) => {
      if(item[0] > item[2]) result += 3;
      else if (item[0] == item[2]) result += 1;
    })
    return result;
  }