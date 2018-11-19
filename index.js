function takeANumber(peopleInLine, newCustomerName) {
  peopleInLine.push(newCustomerName)
  
  return "Welcome, " +  newCustomerName + ". You are number " +  peopleInLine.length + " in line."
  
}

function nowServing(currentLine){
  if (currentLine.length <=0) {
    return  "There is nobody waiting to be served!";
  } else {
    return  "Currently serving " + currentLine.shift() +".";
    
  }
}
  

  
