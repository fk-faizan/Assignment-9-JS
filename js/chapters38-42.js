// ---------- Chapter 38 - 42 "FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS " ----------


// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

// Solution:
    // power();
    // function power() {
    //     var a  = +prompt("Enter First Number");
    //     var b  = +prompt("Enter Power");
    //     var ans = "power of ( " + a + ", " + b +" ) is ";
    //     document.write(ans + Math.pow(a, b));
    // }


// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not

// Solution:
    // var yy = +prompt("Enter Year");

    // function leapyear(year)
    // {
    //     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    // }

    // if(leapyear(yy) == true) {
    //     document.write(yy + ' the year is a leap year')
    // }else {
    //     document.write(yy + ' NOT leap year')
    // }


// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2

// Solution:
    // function sides(a,b,c){
    //     var s =(a+b+c)/2
    //     return s
    // }
    // function area(){
    //     var a = +prompt("first side of triangle")
    //     var b = +prompt("second side of triangle")
    //     var c = +prompt("third side of triangle")
    //     var s= sides(a,b,c)
        
    //     var area = s * ( s-a ) * ( s - b ) * ( s - c )
    //     return area
    // }
    // document.write("The area of the triangle is : "+area())


// 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// Solution:
    // mainFunction();
    // function mainFunction() {
    //     var marksOne = 58;
    //     var marksTwo = 85;
    //     var marksThree = 75;

    //     var obtMarks = marksOne + marksTwo + marksThree;


    //     function average() {
    //         var avg = Math.round(obtMarks / 3);
    //         return avg;
    //     }
    
    //     function percentage() {
    //         var per = Math.round((obtMarks / 300) * 100);
    //         return per;
    //     }

    //     document.write("Marks of Subjects 1 is " + marksOne + "<br>")
    //     document.write("Marks of Subjects 2 is " + marksTwo + "<br>")
    //     document.write("Marks of Subjects 3 is " + marksThree + "<br>")
    //     document.write("Total Marks 300 | Obtained marks " + obtMarks + "<br>")
    //     document.write("Average is " + average() + "<br>")
    //     document.write("Percentage is " + percentage() + "<br>")
    // }


// 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

// Solution:
    // index();
    // var w = "Hello";
    // var w2 = 1;
    // function index(){
    //     for(var i = 0; i = w.length; i++) {
    //         if(i = w2) {
    //             document.write(w + "<br>")
    //             document.write("At " + w2 + " Index you found " + w[i] )
    //             // document.write("your "+ i + " ----- " + w[i] )
    //         } 
    //         else {
    //             document.write("not find")
    //         }
    //         break;
    //     }
    // }

// 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

// Solution:
    // function removeVowels() {
    //     var str = "my name is faizan khan";
    //     if(str.length <= 25) {
    //         return "<br />" + "Remove Vowels: " + str.replace(/[aeiou]/gi, '');
    //     }
    //     else{
    //         return "length is greater than 25 words"
    //     }
    // }

    // document.write(removeVowels())


// 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. 

// Solution:
    // function findOccurrences() {
    //     var str = "Pleases read this application and give me gratuity";
    //     var count = 0;
    //     let vowel = false;
      
    //     for (const letter of str.toLowerCase()) {
    //       switch (letter) {
    //         case 'a':
    //         case 'e':
    //         case 'i':
    //         case 'o':
    //         case 'u':
    //           {
    //             if (vowel) {
    //               count++;
    //               vowel = false;
    //             } else {
    //               vowel = true;
    //             }
    //             break;
    //           }
    //         default:
    //           vowel = false
    //       }
    //     }
    //     return count
    //   }
      
    // document.write("<br>" + "Occurrences in a sentence " + findOccurrences() + "<br>");


// 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.

// Solution:
    // function meters(a) {  
    //     return 1000 * a
    // }
    
    // function feet(a) {
    //     return 3281 * a
    // }
    
    // function inches(a) {
    //     return 39370 * a
    // }
    
    // function centimeters(a) {
    //     return 100000 * a
    // }
    
    // var b = +prompt("Enter Km");
    // function distanceBetweenCities(b) {
    //     return  "Meters " + meters(b) + "<br />" + "Feet " + (feet(b)) + "<br />" + "Inches " +  (inches(b)) + "<br />" + "Centimeters " + (centimeters(b))
    // }
    
    // document.write(distanceBetweenCities(b));


// 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work for fractional part of an hour.

// Solution:
    // function overTime(totalhour) {
    //     if(totalhour > 40) {
    //         var extrahour = totalhour - 40;

    //         return "<br />" + "Rs: " + extrahour * 12
    //     }
    //     else {
    //         return  "<br />" + "Your Working Hours is Less Than 40 Hours."
    //     }
    // }

    // document.write(overTime(60));

// 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

// Solution:
    // function currencyDenomination() {
    //     var cash = +prompt("Enter Amount to Withdrawn ");
    //     var hundred = ~~(cash / 100);
    //     var fifty = ~~((cash % 100) / 50);
    //     var ten = (((cash % 100) % 50) / 10);

    //     return "<b>" + `you will have ${hundred} hundred notes ${fifty} fifty notes ${ten} ten notes.` + "<b>";
    // }

    // document.write(currencyDenomination())
 
