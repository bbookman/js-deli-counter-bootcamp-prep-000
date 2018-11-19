line = ["Betty","Wilma"]

function currentLine(lineOfPeople){
    var returnString = "The line is currently ";
 
    for (var i = 0; i < lineOfPeople.length; i++){
      if (lineOfPeople.length == 1){
        returnString += (i + 1) + "." + lineOfPeople[i] + " is the last person in line"
        lineOfPeople.pop()
      } else {
          returnString = "The line is currently empty."
      }

    }
        
    return returnString
  }

console.log(currentLine(line));