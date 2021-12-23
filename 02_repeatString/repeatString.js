
const repeatString = function(string, number) { 
    let repeatedString = ""
        while (number > 0) {
            repeatedString += string;
            number--
           } if (number < 0) {
               return "ERROR"
           }
    return repeatedString;
};

// Step 1) Type in text
// Step 2) When text is typed, repeat text 'n' times. 

// Do not edit below this line
module.exports = repeatString;
