// ---------- Chapter 1 "ALERTS" ----------

// 1. Write a script to greet your website visitor using JS alert box.
    // alert("Welcome");

// 2. Write a script to display following message on your web page:
    // alert("Error! Please enter a valid password.");

// 3. Write a script to display following message on your web page: (Hint : Use line break)
    // alert("Welcome to JS Land... \nHappy Coding!");

// 4. Write a script to display following messages in sequence:
    // alert("Welcome to JS Land...");
    // alert("Happy Coding!");

// 5. Generate the following message through browser’s developer console:
    // alert("Hello.. i can run JS throught my web browser's console")

// 6. Make use of alerts in your new/existing HTML & CSS
// project.
// 7. Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// -- END --





// ---------- Chapter 2 "VARIABLES FOR STRINGS" ----------

// 1. Declare a variable called username.
    // var username = "";

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
    // var myName;
    // myName = "Faizan Khan";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
    // var message = "Hello World";
    // alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
    // var name = "Jhone Doe";
    // var age = "15 years old"
    // var course = "Certified Mobile Application Development"
    // alert(name);
    // alert(age);
    // alert(course);

// 5. Write a script to display the following alert using one JS variable:
    // var food = "PIZZA \nPIZZ\nPIZ\nPI\nP";
    // alert (food);

// 6. Declare a variable called email and assign to it a string that 
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
    // var email = "example@example.com";
    // alert("My email address is " + email);

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
    // var book;
    // book = "A smarter way to learn JavaScript.";
    // alert("I am trying to learn from the Book " + book);

// 8. Write a script to display this in browser through JS
    // var message = "Yah! I can write HTML content through JavaScript";
    // document.write(message);

// 9. Store following string in a variable and show in alert and browser through JS
    // var message = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    // alert(message);
    // document.write(message);

// -- END --





// ---------- Chapter 3 "VARIABLES FOR NUMBERS" ----------

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
    // var age = 22;
    // alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.
    // var i = 14;
    // alert("You have visited this site " + i + " times");

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
    // var birthYear = 1997;
    // document.write("My birth year is " + birthYear + "<br> Data type of my declared variable is number");

// 4. A visitor visits an online clothing store www.xyzClothing.com. Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
    // var name = "<b>John Doe</b>";
    // var title = "<b>T-shirt</b>(s)";
    // var qty = "<b>" + 5 +"</b>";

    // document.write(name + " ordered " + qty + " " + title + " on XYZ Clothing store");

// -- END --





// ---------- Chapter 4 "VARIABLE NAMES: LEGAL & ILLEGAL" ----------

// 1. Declare 3 variables in one statement
    // var one, two, three;

// 2. Declare 5 legal & 5 illegal variable names.
    // legal
    // 1: fullName = ""; (camelCase)
    // 2: country_name = "";
    // 3: $name = "";
    // 4: _name = "";
    // 5: 123 = "";
    // illegal
    // 1: %name (special charecter)
    // 2: country name = ""; (space between)
    // 3: alert = ""; (javascript keywords)
    // 4: 
    // 5:


// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,______ and ______. For example $my_1stVariable
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________.
    
// Solution:
    // var a = "<b>Rules for naming JS variables</b>";
    // var b = "Variable names can only contain <u>letters</u>, <u>numbers</u>, <u>$</u>, and <u>underscrore</u>";
    // var c = "Variables must begin with a <u>letter</u>, <u>$</u>, <u>underscrore</u>";
    // var d = "Variable names are case <u>case-sensitive</u>";
    // var e = "Variable names should not be JS <u>JavaScript Keywords</u>";
    // document.write(a + "<br><br><br>" + b + "." + "<br>" + c + "." + "<br>" + d + "." + "<br>" + e + ".")

// ---------- END ----------





// ---------- Chapter 5 "MATH EXPRESSIONS" ----------

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// Solution:
    // var value1 = +prompt("Enter 1st Number");
    // var value2 = +prompt("Enter 2nd Number");
    // var sum = (value1 + value2);
    // document.write("Sum of " + value1 + " and " + value2 + " is " + sum);


// 2. Repeat task1 for subtraction, multiplication, division & modulus.

// Solution:
    // var value1 = +prompt("Enter 1st Number");
    // var value2 = +prompt("Enter 2nd Number");

    // var sub = (value1 - value2);
    // var mult = (value1 * value2);
    // var div = (value1 / value2);
    // var mod = (value1 % value2);

    // document.write("Subtraction of " + value1 + " and " + value2 + " is " + sub);
    // document.write("Multiplication of " + value1 + " and " + value2 + " is " + mult);
    // document.write("Division of " + value1 + " and " + value2 + " is " + div);
    // document.write("Modulus of " + value1 + " and " + value2 + " is " + mod);


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”

// Solution:
    // var un_num; //a
    // var b = "Value after variable declaration is "; //b
    // var num = "5"; //c
    // var c = "Initial value: "; //d
    // var e = "Value after increment is: " + num++ //e

    // document.write(b + un_num + "</br> " + c + num + "</br>" + e);


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

// Solution:
    // var ticketCost = 600;
    // var ticket = 5;

    // var calc = ticket * ticketCost;

    // document.write("Total cost to buy " + ticket + " tickets to a movie is " + calc + "PKR");


// 5. Write a script to display multiplication table of any number in your browser. E.g

// Solution:
    // var value1 = +prompt("Enter Table No");

    // for (var i = 1; i <= 10; i++) {
    //     document.write(value1 + " x " + i + " = " + value1*i + "</br>");
    // }


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
//C = (F-32) * 5 / 9
//F = (c * 9 / 5) + 32

// Solution:
    // var cels;
    // //var Fahre;
    // document.write(cels + " is " + (cels - 5) * 5 / 9);

    // var celsius = 25;
    // var celsiusInF = ((celsius * 9 / 5) + 32);
    // document.write(celsius + '°C is ' + celsiusInF + '°F' + "<br>");
    // var fahrenheit = 70;
    // var fahrenheitInC = ((fahrenheit - 32)*5)/9;
    // document.write(fahrenheit + '°F is ' + fahrenheitInC + '°C');


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Solution:
    // var heading = '<b>Shopping Cart</b>';
    // var price1 = 650;
    // var price2 = 100;
    // var orderQty1 = 3;
    // var orderQty2 = 7;
    // var shippingCharges = 100;

    // var total = ((price1 * orderQty1) + (price2 * orderQty2) + shippingCharges);

    // document.write(heading + "<br><br>");
    // document.write("Price of item 1 is " + price1 + "<br>");
    // document.write("Quantity of item 1 is " + orderQty1 + "<br>");
    // document.write("Price of item 2 is " + price2 + "<br>");
    // document.write("Quantity of item 2 is " + orderQty2 + "<br>");
    // document.write("Shipping Charges " + shippingCharges + "<br> <br>");
    // document.write("Total cost of your order is " + total);


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// Solution: 
    // var totalMarks = 980;
    // var obtainedMarks = 804;

    // var percentage = obtainedMarks / totalMarks * 100;
    
    // document.write("Total marks: "+ totalMarks + "<br>");
    // document.write("Marks obtained: " + obtainedMarks + "<br>");
    // document.write("Percentage" + percentage + "%");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// Solution:
    // var dollar = 10;
    // var riyal = 25;
    // var dollarPrice = 104.80;
    // var riyalPrice = 28;

    // var totalPkr = (dollar * dollarPrice) + (riyal * riyalPrice);

    // document.write("Total Currency in PKR: " + totalPkr);


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// Solution:
    // var num = 10;
    // var calc = (num + 5) + (num * 10) + (num / 2);
    // document.write(calc);


// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

// Solution:
    // var birthYear = 1997;
    // var currentYear  = 2020;
    // var age  = currentYear - birthYear;
    // document.write('Current Year ' + currentYear + "<br>");
    // document.write('Birth Year ' + birthYear + "<br>");
    // document.write('Your Age is ' + age);


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// Solution:
    // var radius = 20;
    // var circumference = 2 * 3.142 * radius;
    // var area = 3.142 * (radius * 2);
    
    // document.write("The Radius of circle: " + radius + "<br>");
    // document.write("The circumference is " + circumference + "<br>");
    // document.write("The area is " + area);


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.

// Solutions:
    // var snack = "Chocolate Chip";
    // var age = 15;
    // var maxAge = 65;
    // var perDaySnack = 3;
    // var totalNeeded = (perDaySnack * 365) * (maxAge - age);

    // document.write('Favourite Snack: ' + snack + '<br>');
    // document.write('Current age: ' + age + '<br>');
    // document.write('Estimate Maximum Age: ' + maxAge + '<br>');
    // document.write('Amount of snack per day: ' + perDaySnack + '<br>');
    // var message = 'You will need ' + totalNeeded + ' ' + snack + ' to last you until the ripe old age of ' + maxAge;
    // document.write(message);

// ---------- END ----------





// ---------- Chapter 6 - 9 "MATH EXPRESSIONS" ----------

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// Solution:
    // var num = 10;
    // var num2 = 10;
    // var num3 = 11;
    // var num4 = 12;
    // var num5 = 11;

    // var preIncrement = ++num2;
    // var postIncrement = num3++;
    // var preDecrement = --num4;
    // var postDecrement = num5--;

    // document.write('Result:' + '<br>');
    // document.write('The value of a is: ' + num + '<br>');
    // document.write('..............................................');
    // document.write('<br><br>');
    // document.write('The value of ++a is: ' + preIncrement);
    // document.write('<br>');
    // document.write('Now the value of a is: ' + num2);
    // document.write('<br><br><br>');
    // document.write('The value of a++ is: ' + postIncrement);
    // document.write('<br>');
    // document.write('Now the value of a is: ' + num3);
    // document.write('<br><br><br>');
    // document.write('The value of --a is: ' + preDecrement);
    // document.write('<br>');
    // document.write('Now the value of a is: ' + num4);
    // document.write('<br><br><br>');
    // document.write('The value of a-- is: ' + postDecrement);
    // document.write('<br>');
    // document.write('Now the value of a is: ' + num5);


// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// Solution:
    // var a = 2, b = 1;
    // var result = --a - --b + ++b + b--;

    // document.write("a is 2" + "<br>" + "b is 1" + "<br>");
    // document.write(result);


// 3. Write a program that takes input a name from user & sgreet the user.

// Solution:
    // var name = prompt("Enter Your Name");
    // alert("Welcome " + name + " !");


// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// Solution:
    // var number = +prompt("Enter Your Number");
    // if (number == '')
    // {
    //     number = 5;
    // }

    // for (var i = 1; i <= 10; i++) {
    //     document.write(number + " x " + i + " = " + number*i + "</br>");
    // }


// 6.
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// Solution: 
    // var sub1 = prompt("Enter 1st Subject Name");
    // var sub2 = prompt("Enter 2nd Subject Name");
    // var sub3 = prompt("Enter 3rd Subject Name");

    // var sub1Marks = 100;
    // var sub2Marks = 100;
    // var sub3Marks = 100;

    // var sub1ObtMarks = +prompt("Enter 1st Subject Marks", sub1 + " Marks");
    // var sub2ObtMarks = +prompt("Enter 2nd Subject Marks", sub2 + " Marks");
    // var sub3ObtMarks = +prompt("Enter 3rd Subject Marks", sub3 + " Marks");

    // var sub1Per = sub1ObtMarks / sub1Marks * 100 + "%";
    // var sub2Per = sub2ObtMarks / sub2Marks * 100 + "%";
    // var sub3Per = sub3ObtMarks / sub3Marks * 100 + "%";

    // var totalMarks = sub1Marks + sub2Marks + sub3Marks;
    // var totalMarksObt = sub1ObtMarks + sub2ObtMarks + sub3ObtMarks;
    // var percentage = totalMarksObt / totalMarks * 100 + "%";

    // document.write("<b> Subject Total Marks Obtained Marks Percentage</b><br>");
    // document.write(sub1 + '&nbsp' + sub1Marks + '&nbsp' + sub1ObtMarks + '&nbsp' + sub1Per + "<br>" + sub2 + '&nbsp' + sub2Marks + '&nbsp' + sub2ObtMarks + '&nbsp' + sub2Per + "<br>" + sub3 + '&nbsp' + sub3Marks + '&nbsp' + sub3ObtMarks  + '&nbsp' + sub3Per);
    // document.write("<br><b>" + totalMarks + '&nbsp&nbsp&nbsp' + totalMarksObt + '&nbsp&nbsp&nbsp' + percentage + "</b>");

// ---------- END ----------





// ---------- Chapter 9 - 11 "USER INPUT & CONDITIONAL STATEMENT " ----------

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// Solution:
    // var city = prompt("Enter Your City");

    // if(city == 'Karachi') 
    // {
    //     alert("Welcome to city of lights");
    // }


// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// Solution:
    // var gender = prompt("Enter Your Gender male/female", "male/female");

    // if(gender == 'male') 
    // {
    //     alert("Good Morning Sir");
    // }
    // else if(gender == 'female') {
    //     alert("Good Morning Ma’am");
    // }


// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

// Solution:
    // var signal = prompt("Enter Traffic Signal Color Red/Yellow/Green", "Red/Yellow/Green");

    // if(signal === "Red") {
    //     alert("Must Stop");
    // } else if(signal === "Yellow") {
    //     alert("Ready to move");
    // } else if(signal === "Green") {
    //     alert("Move now");
    // }


// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// Solution:
    // var fuel = +prompt("Enter your remaining fuel");

    // if(fuel <= 0.25) {
    //     alert("Please refill the fuel in your car");
    // }


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs

// Solution:
    // var a = 4;
    // if (++a === 5){
    //     alert("given condition for variable a is true");
    // }


// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// Solution:
    // var totalMarks = +prompt("Enter Total Marks");
    // var grade;
    // var remarks;

    // var marksSub1 = +prompt("Marks Obtained Subject 1", "Subject 1");
    // var marksSub2 = +prompt("Marks Obtained Subject 2", "Subject 2");
    // var marksSub3 = +prompt("Marks Obtained Subject 3", "Subject 3");

    // var totalMarksObt = marksSub1 + marksSub2 + marksSub3;
    // var percentage = totalMarksObt / totalMarks * 100;

    // if(percentage >= 80) {
    //     grade = "A-one";
    //     remarks = "Excellent";
    // } else if(percentage >= 70) {
    //     grade = "A";
    //     remarks = "Good";
    // } else if(percentage >= 60) {
    //     grade = "B";
    //     remarks = "You need to improve";
    // } else if(percentage < 60) {
    //     grade = "Fail";
    //     remarks = "Sorry";
    // }

    // document.write("<b>Marks Sheet</b><br><br><br>");
    // document.write("Total marks : " + totalMarks + "<br>");
    // document.write("Marks obtained : " + totalMarksObt + "<br>");
    // document.write("Percentage : " + percentage + "%" + "<br>");
    // document.write("Grade : " + grade + "<br>");
    // document.write("Remarks : " + remarks + "<br>");


// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.s


// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// Solution:
    // var num = +prompt("Enter your number");

    // if(num % 3 == 0) {
    //     alert("Number is Divisible by 3s");
    // } else {
    //     alert("Not divisible by 3");
    // }


// 9. Write a program that checks whether the given input is an even number or an odd number.

// Solution:
    // var num = +prompt("Enter your number");

    // if(num % 2 == 0) {
    //     alert("Even Number");
    // } else {
    //     alert("Odd Number");
    // }


// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// Solution:
    // var temp = +prompt("Enter Temperature", "40/30/20/10");

    // if(temp > 40) {
    //     alert("It is too hot outside.");
    // } else if(temp > 30) {
    //     alert("The Weather today is Normal.");
    // } else if(temp > 20) {
    //     alert("Today’s Weather is cool.");
    // } else if(temp > 10) {
    //     alert("OMG! Today’s weather is so Cool.");
    // }


// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// Solution:
    // var firstNum = +prompt("Enter 1st Number");
    // var secNum = +prompt("Enter 2nd Number");
    // var operator = prompt("Enter Operator", "+, -, *, /, %");

    // if(operator == '+') {
    //     alert(firstNum + secNum);
    // } else if (operator == '-') {
    //     alert("Result is : " + firstNum - secNum);
    // }  else if (operator == '*') {
    //     alert("Result is : " + firstNum * secNum);
    // }  else if (operator == '/') {
    //     alert("Result is : " + firstNum / secNum);
    // }  else if (operator == '%') {
    //     alert("Result is : " + firstNum % secNum);
    // }
    
// ---------- END ----------





// ---------- Chapter 12 - 13 "IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS" ----------

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// Solution:
    // var integer1 = +prompt("Value 1");
    // var integer2 = +prompt("Value 2");

    // if(integer1 > integer2) {
    //     alert("1st Number that is " + integer1 + " is larger than 2nd Number " + integer2);
    // } else if(integer2 > integer1) {
    //     alert("2nd Number that is " + integer2 + " is larger than 1st Number " + integer1);
    // } else if (integer1 === integer2) {
    //     alert("Both Number Are Equal");
    // }


// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// Solution:
    // var num = +prompt("Enter Number");

    // if(num === 0) {
    //     document.write("Number is Zero");
    // } else if (num > 0) {
    //     document.write("Number is Positive");
    // } else {
    //     document.write("Number is Negative");
    // }


// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// Solution:
    // var vowel = ['a', 'e', 'i', 'o', 'u'];

    // var char = prompt("Enter a character");

    // if(vowel.includes(char)) {
    //     document.write("True");
    // } else {
    //     document.write("False");
    // }


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password youentered matches the original password”. Show“Incorrect password” otherwise.

// Solution:
    // var pswd = "123";

    // var userInput1 = prompt("Enter Password");
    // var userInput2;

    // if(userInput1 == '') {
    //     alert("Please enter your password");
    // } else if(userInput1 !== pswd) {
    //     alert("You Enter the wrong password");
    // } else if(userInput1 === pswd) {
    //     userInput2 = prompt("Enter Password Again");
    //     if(userInput2 === userInput1) {
    //         alert("Correct! The password you entered matches the original password");
    //     } else {
    //         alert("Incorrect password");
    //     }
    // }


// 6. This if/else statement does not work. Try to fix it: 
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// Solution:
    // var greeting;
    // var hour = 13;
    // if(hour < 18) {
    //     alert(greeting = "Good day");
    // }
    // else {
    //     alert(greeting = "Good evening");
    // }
        
// ---------- END ----------





// ---------- Chapter 14 - 16 "ARRAYS" ----------

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
    // BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// Solution:
    // var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
    // var count = 1;

    // for(var i = 0; i < qualifications.length; i++) {
    //     document.write(count++ + ") " + qualifications[i] + "<br>");
    // }


// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// Solution:
    // var students = ["Faizan", "Ahmed", "Zuhaib"];
    // var scores = [380, 440, 320];

    // for(var i = 0; i < students.length; i++) {
    //     document.write("Score of " + students[i] + " is " + scores[i] + "." + " Percentage: " + scores[i] / 500 * 100 + "%" + "<br>")
    // }


// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. 

// Solution:
    // var color = ['blue', 'green', 'White', 'red', 'orange'];

    // var newColor = prompt("Add New Color Name");

    // color.unshift(newColor);  // add to the beginnin

    // color.push(newColor); // add to the end

    // color.push('red', 'orange'); // add

    // color.shift(); // Delete the first color in the array

    // color.pop(); // Delete the last color in the array

    // var addColor = +prompt("Enter Array Index", "0,1,2..."); // f.... at which index he/she wants to add a color
    // var newColor = prompt("Add New Color Name");
    // color.splice(addColor,1, newColor);

    // var delColor = +prompt("Enter Array Index", "0,1,2..."); // g.... at which index he/she wants to delete color(s) & how many colors
    // var element =  +prompt("How Many Color", "0,1,2...");
    // color.splice(delColor,element);

    // document.write(color);
    

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// Solution:
    // var studentScore = [320, 230, 480, 120];

    // document.write("Scores of Students: " + studentScore + "<br>");
    // document.write("Ordered Scores of Students: " + studentScore.sort());


// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// Solution:
    // var cities = ['Karachi', 'Lahore', 'Islamadab', 'Quetta', 'Peshawar'];
    // var selectCities = cities.slice(2,4);

    // document.write("Cities list: <br>" + cities + "<br><br>");
    // document.write("Selected cities list: <br>" + selectCities);


// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

// Solution:
    // var arr = ['This', 'is', 'my', 'cat'];

    // document.write("Array: <br>" + arr + "<br><br>");
    // document.write("String: <br>" + arr.join(" "));


// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// Solution:
    // var arr = [];

    // for(var i = 0; i < 4; i++) {
    //     arr.push(prompt("Store SomeThings"));
    // }

    // document.write("Devices:" + "<br>" + arr + "<br><br>");

    // for(var a = 0; a < arr.length; a++) {
    //     document.write("Out: <br>" + arr[a] + "<br>");
    // }


// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

// Solution:
    // var arr = [];

    // for(var i = 0; i < 4; i++) {
    //     arr.push(prompt("Store SomeThings"));
    // }

    // document.write("Devices:" + "<br>" + arr + "<br><br>");

    // var arrReverse = arr.reverse();

    // for(var a = 0; a < arrReverse.length; a++) {
    //     document.write("Out: <br>" + arrReverse[a] + "<br>");
    // }


// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

// Solution:
    // var phone = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

    // for(var i = 0; i < phone.length; i++) {
    //     document.write(phone[i] + "<br>");
    // }
        
// ---------- END ----------





// ---------- Chapter 17 - 20 "ARRAYS AND LOOP" ----------


// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

// Solution:
    // var arr = []


// 2. Declare and initialize a multidimensional array representing the following matrix:

// Solution:
    // var arr = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]];

    // for(var i = 0; i < arr.length; i++) {
    //     document.write(arr[i].join(" ")+ "<br>");
    // }


// 3. Write a program to print numeric counting from 1 to 10.

// Solution:
    // for(var i = 1; i <= 10; i++) {
    //     document.write(i + "<br>");
    // }


// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// Solution:
    // var number = +prompt("Enter a number to show its multiplication table");
    // var lnth = +prompt("Enter length multipilication table");

    // for(var i = 1; i <= lnth; i++) {
    //     document.write(number + " x " + i + " = " + number*i + "</br>");
    // }


// 5. Write a program to print items of the following array using for loop:

// Solution:
    // var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

    // for(var i = 0; i < fruits.length; i++) {
    //     document.write(fruits[i] + "<br>");
    // }

    // document.write("<br>");
    // for(var i = 0; i < fruits.length; i++) {
    //     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
    // }


// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// Solution:
    // var arra = []; // a Counting 1 - 15
    // for(var i = 1; i <= 15; i++) {
    //     arra.push(i);
    // }
    // document.write("Counting: <br>" + arra); // a

    // var arrb = []; // b Reverse Counting 10 - 1
    // for(var i = 1; i <= 10; i++) {
    //     arrb.push(i);
    // }
    // document.write("<br><br> Reverse counting: <br>" + arrb.reverse()); // b

    // var arrc = []; // c Even Number
    // for(var i = 0; i <= 20; i++) {
    //     arrc.push(i);
    // }
    // document.write("<br><br> Even: <br>" + arrc.filter(Number => Number % 2 == 0)); // c

    // var arrd = []; // d Odd Number
    // for(var i = 1; i <= 20; i++) {
    //     arrd.push(i);
    // }
    // document.write("<br><br> Odd: <br>" + arrd.filter(Number => Number % 2 !== 0)); // d

    // var arra = []; // e Series
    // for(var i = 2; i <= 20; i = i + 2) {
    //     arra.push(i);
    // }
    // document.write("<br><br> Series: <br>" + arra); // e