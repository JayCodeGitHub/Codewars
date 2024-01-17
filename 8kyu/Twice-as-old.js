function twiceAsOld(dadYearsOld, sonYearsOld) {
    let age = 0
    if(dadYearsOld == sonYearsOld * 2) return 0
    else if(dadYearsOld > sonYearsOld * 2) {
       for (i = 1;dadYearsOld + i !=  (sonYearsOld + i) * 2 ;i++) {
        age =  i
      }
        return age +1 
    } else {
      for (i = 1;dadYearsOld - i !=  (sonYearsOld - i) * 2 ;i++) {
        age =  i
      }
        return age + 1
    }
    // your code here
  }