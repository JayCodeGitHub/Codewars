function elevator(left, right, call){
    if( right === call ) return "right"
    else if (left === call) return "left"
    else if ( left === right ) return "right"
    
    
    else if ( left < call && right < call && call - left < call - right ) return "left"
    
    else if (left < call && right < call && call - left > call - right ) return "right"
    
    else if (left > call && right > call && call - left > call - right) return "left"
    
    else if ( left > call && right < call && left - call > right - call ) return "right"
    
    else return "right"
  
    // code on! :)
  }