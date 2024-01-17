function pillars(numPill, dist, width) {
    let distance = 0;
    distance += dist * 100 * (numPill - 1)
    
    distance += width * (numPill - 2)
    
    return distance < 0 ? 0 : distance;
  }