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
  
  function currentLine(lineOfPeople){
    var returnString = "";
    for (var i = 0; i < lineOfPeople.length; i++){
       returnString += "The line is currently " + i + 1 + "." + lineOfPeople + ", "
    }
    return returnString
  }
  
}