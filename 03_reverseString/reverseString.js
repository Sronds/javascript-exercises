const reverseString = function(str) {
    let length = str.length;
    let reverseWord = ""

    while (length > 0) {
        reverseWord += str.charAt(str.length-1)
        length--
        str = str.slice(0,-1)
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;



/* so i have a string right. 
first thing i'm going to have to do is figure out how many characters it has.
so i need to figure out it's length. string.length. 
so let's assume it has x characters. I'm going to save this length into a variable. 
string.length = x 
x = a number and this is the length of the string. 
now i need to return that number's character -1 all the way to 0. 
let's assume it had 10 characters. I would have to get -1, -2, -3, -4, -5... until I character returns null 
or undefined.*/