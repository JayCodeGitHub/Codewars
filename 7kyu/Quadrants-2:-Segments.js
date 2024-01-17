function quadrant_segment(A, B) {
  if(A.x > 0 && A.y > 0 && B.x > 0 && B.y > 0 ) return false;
  else if(A.x < 0 && A.y < 0 && B.x < 0 && B.y < 0 ) return false;
  else if(A.x > 0 && A.y < 0 && B.x > 0 && B.y < 0) return false;
  else if(A.x < 0 && A.y > 0 && B.x < 0 && B.y > 0) return false;
    
  return true
}