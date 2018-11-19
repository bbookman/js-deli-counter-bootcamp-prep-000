line = ["Betty","Wilma"]

function currentLine(lineOfPeople){
  returnString = "The line is currently: "
  if (lineOfPeople.length === 0){
    
    return "The line is currently empty."
  } else {
    for (var i =0; i < lineOfPeople.length; i++){
      returnString += str(i) + ". " + lineOfPeople[i]
    }
  }
  
    
}//currentLine

console.log(currentLine(line));