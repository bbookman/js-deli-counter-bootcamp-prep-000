line = ["Betty","Wilma"]

function currentLine(lineOfPeople){
    var returnString = "The line is currently ";
    
    if lineOfPeople.length == 0 {
      return "The line is currently empty."
    } else {
      for (var i = 0; i < lineOfPeople.length; i++){
        if (lineOfPeople.length == 1){
          returnString += (i + 1) + "." + lineOfPeople[i] + " is the last person in line"
        }
        return returnString
    }
 
    
  }

console.log(currentLine(line));