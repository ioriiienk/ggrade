var a = ("Congratulations Your Grade is ");
var c = ("Your Grade is ");
var d = ("You are ");


var marks = parseFloat(prompt("Please Type Your Marks Here"));
var b = "<br>"

if(marks >= 80 && marks <= 100)
document.write(a + "A+" + b);

else if(marks >= 70 && marks <= 79)
document.write(c + "A" + b);

else if(marks >= 60 && marks <= 69)
document.write(c + "A-" + b);

else if(marks >= 50 && marks <= 59)
document.write(c + "B" + b);

else if(marks >= 40 && marks <= 49)
document.write(c + "C" + b);

else if(marks >= 33 && marks <= 39)
document.write(c + "D" + b);

else if(marks >= 0 && marks <= 32)
document.write(d + "Fail!" + b);