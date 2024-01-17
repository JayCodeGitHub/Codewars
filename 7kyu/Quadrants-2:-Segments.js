function quadrant_segment(A, B) {
  
    let qA = 1
    let qB = 1
      
    if(A.x > 0 && A.y > 0) qA =  1
    else if(A.x > 0 && A.y < 0) qA =   4
    else if(A.x < 0 && A.y > 0) qA =   2
    else qA = 3
    
    
    if(B.x > 0 && B.y > 0) qB =  1
    else if(B.x > 0 && B.y < 0) qB =   4
    else if(B.x < 0 && B.y > 0) qB =   2
    else qB = 3  
    
    if(qB == qA ) return false 
    return true
  }