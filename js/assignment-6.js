// ---------- Chapter 21 - 25 "STRING METHODS" ----------


// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// Solution: 
    // var firstName = prompt("Enter First Name", "First Name");
    // var lastName = prompt("Enter Last Name", "Last Name");

    // var fullName = firstName + " " + lastName;
    // alert("Welcome " + fullName);


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// Solution:
    // var mobileName = prompt("Enter your favorite Mobile Name", "Mobile Name");
    // var length = mobileName.length;

    // document.write("My favorite phone is: " + mobileName + "<br>" + "Length of string: " + length);


// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

// Solution:
    // var str = "Pakistani";
    // var index = str.indexOf("n");

    // document.write("String: " + str + "<br>");
    // document.write("Index of 'n': " + index);


// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// Solution:
    // var str = "Hello World";
    // var index = str.lastIndexOf("l");

    // document.write("String: " + str + "<br>");
    // document.write("Last index of 'n': " + index);


// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// Solution:
    // var str = "Pakistani";
    // var index = str.charAt(3);

    // document.write("String: " + str + "<br>");
    // document.write("Character at index 3: " + index);


// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// Solution:
    // var str = "Hyderabad";
    // var str2 = "Islam";
    // var remove = str.replace("Hyder", str2);

    // document.write("City: " + str + "<br>");
    // document.write("After replacement: " + remove);


// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// Solution:
    // var message = "Ali and Sami are best friends. They play cricket and football together.";
    // var replaceWith = "&";
    // var result = message.split('and').join(replaceWith);

    // document.write("Message: " + message + "<br>");
    // document.write("After replacement: " + result);


// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// Solution: 
    // var str = "472";
    // var tyeOfStr = typeof(str);
    // var converToNum = parseInt(str);
    // var tyeOfNum = typeof(converToNum);

    // document.write("Value: " + str + "<br>");
    // document.write("Type: " + tyeOfStr + "<br>");
    // document.write("Value: " + converToNum + "<br>");
    // document.write("Type: " + tyeOfNum + "<br>");


// 10. Write a program that takes user input. Convert and show the input in capital letters.

// Solution:
    // var str = prompt("Enter Something");

    // document.write("User input: " + str + "<br>");
    // document.write("Upper case: " + str.toUpperCase());


// 11. Write a program that takes user input. Convert and show the input in title case.

// Solution:
    // var str = prompt("Enter Something");

    // var firstChar = str.slice(0,1);
    // var otherChar = str.slice(1);

    // firstChar = firstChar.toUpperCase();
    // otherChar = otherChar.toLowerCase();

    // var titleCase = firstChar + otherChar;

    // document.write("User input: " + str + "<br>");
    // document.write("Title case: " + titleCase);


// 12. Write a program that converts the variable num to string.

// Solution:
    // var num = 35.36 ;

    // var str = num.toString();
    // var changed = str.replace('.', "");

    // document.write("Number: " + num + "<br>");
    // document.write("Result: " + changed);


// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// Solution: -------------------------------------------- UNSOLVED !!!! --------------------------------------------
    // var str = prompt("Enter Your Name");

    // var splChars = "@";
    // for (var i = 0; i < str.value.match; i++) {
    //     // console.log(str.value);
    //     if (splChars.indexOf(str.value.charAt(i)) != -1){
    //         alert ("Illegal characters detected!"); 
    //     }
    // }


// 14. Write a program to en/able “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. 
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

// Solution:
    // var A = ["cake", "apple", "pie", "cookie", "chips", "patties"];

    // var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

    // var next = userInput.toLowerCase();

    // for(var i = 0; i < A.length; i++) {
    //     if(A[i] === next) {
    //         document.write(next + " is available at index " + i + " in our bakery");
    //         break;
    //     }
    //     else
    //     {
    //         document.write("We are sorry. " + next + " is <b>not available</b> in our bakery");
    //         break;
    //     }
    // }


// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9

// Solution: -------------------------------------------- UNSOLVED !!!! --------------------------------------------


// 16. Write a program to convert the following string to an array using string split method.

// Solution:
    // var university = "University of Karachi";
    // var ar = university.split('');;

    // document.write(ar.join("<br>"));


// 17. Write a program to display the last character of a user input.

// Solution
    // var userInput = prompt("Enter Something");

    // var lastChar = userInput.charAt(userInput.length-1); // OR lastChar = userInput.slice(-1);  

    // document.write("User input: " + userInput + "<br>");
    // document.write("Last character of input: " + lastChar);


// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// Solution:
    // var text = "The quick brown fox jump over the jazy dog."

    // var wordFound = text.match(/the/g).length;

    // document.write("Text: " + text + "<br>");
    // document.write("There are " + wordFound + " occurrence(s) of word 'the'");
        
// ---------- END ----------





// ---------- Chapter 26 - 30 "MATH METHODS" ----------

// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number b. round off value of the number c. floor value of the number d. ceil value of the number

// Solution
    // var num = +prompt("Enter number in point values");

    // var round = Math.round(num);
    // var floor = Math.floor(num);
    // var ceil = Math.ceil(num)

    // document.write("number: " + num + "<br>");
    // document.write("round off: " + round + "<br>");
    // document.write("floor value: " + floor + "<br>");
    // document.write("ceil value: " + ceil);


// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number b. round off value of the number c. floor value of the number d. ceil value of the number

// Solution:
    // var num = +prompt("Enter number in negative value");

    // var round = Math.round(num);
    // var floor = Math.floor(num);
    // var ceil = Math.ceil(num);

    // document.write("number: " + num + "<br>");
    // document.write("round off: " + round + "<br>");
    // document.write("floor value: " + floor + "<br>");
    // document.write("ceil value: " + ceil);


// 3. Write a program that displays the absolute value of a number.

// Soution:
    // var num = +prompt("Enter number in negative value");

    // var absolute = Math.abs(num);
    // document.write("The absolute value of: " + num + " is " + absolute );


// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

// Solution:
    // var diceRoll = Math.floor( Math.random() * 6 ) +1;
    // document.write("random dice value: " + diceRoll);


// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// Solution:
    // var coinValue = Math.floor( Math.random() * 2 ) +1;

    // if(coinValue === 1) {
    //     document.write(coinValue + "<br>" + " random coin value: Tails" );    
    // } else {
    //     document.write(coinValue + "<br>" + " random coin value: Heads" );    
    // }


// 6. Write a program that shows a random number between 1 and 100 in your browser.

// Solution:
    // var randomNum = Math.floor( Math.random() * 100 ) +1;
    // document.write("random number between 1 and 100: " + randomNum);


// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms

// Solution:
    // var userInput = prompt("Enter your weight in kilograms");
    // var num = parseInt(userInput);

    // document.write("The weight of user is " + num + " Kilograms");


// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret number, congratulate the user.

// Solution:
    // var secretNum = Math.floor( Math.random() * 10 ) +1;    
    // var userInput = +prompt("Enter a number between 1 and 10");

    // if(userInput === secretNum) {
    //     alert("Congratulate The Number Has Match!");
    // } else {
    //     alert("Try Again");
    // }

// ---------- END ----------





// ---------- Chapter 31 - 34 "DATE METHODS" ----------

// 1. Write a program that displays current date and time in
// your browser.

// Solution:
    // var rightNow = new Date();
    // document.write(rightNow);


// 2. Write a program that alerts the current month in words. For example December.
    // var rightNow = new Date();

    // var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // var monthNow = month[rightNow.getMonth()];
    // document.write("Current month: " + monthNow);


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun

// Solution:
    // var rightNow = new Date();

    // var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // var dayNow = day[rightNow.getDay()];

    // document.write("Today is " + dayNow.substring(0,3));


// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// Solution:
    // var rightNow = new Date();
    // if(rightNow.getDay() == 6 || rightNow.getDay() == 0) {
    //     document.write("Its Fun day");
    // }







// -------------------------------------------- UNSOLVED !!!! --------------------------------------------

// Chapter 21 - 25 (13, 15)
// Chapter 31 - 34 (4)
// Chapter 35 - 38 ()

