function sameCase(a, b){
    const codeA = a.charCodeAt(0);
    const codeB = b.charCodeAt(0);
    if(codeA >= 65 && codeA <= 90 && codeB >= 65 && codeB <= 90) return 1;
    else if((codeA >= 97 && codeA <= 122 && codeB >= 97 && codeB <= 122)) return 1;
    else if(codeA >= 65 && codeA <= 90 && codeB >= 97 && codeB <= 122 || codeA >= 97 && codeA <= 122 && codeB >= 65 && codeB <= 90) return 0;
    else return -1;
  }