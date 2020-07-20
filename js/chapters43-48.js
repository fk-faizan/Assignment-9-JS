// 1. Show an alert box on click on a link.

// Solution:
    function task1() {
        alert("Welcome!");
    }


// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.

// Solution:
    function task2() {
        alert("Thanks for purchasing a phone from us");
    }


// 3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.

// Solution

// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

// Solution
    function changePic(id,image)
    {
        document.getElementById(id).src=image
    }


// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter value in browser.

// Solution
    var count = 0;
    document.getElementById("counter").innerHTML = count;

    function increase() {
        count++;
        document.getElementById("counter").innerHTML = count;
    };
    
    function decrease() {
        count--;
        document.getElementById("counter").innerHTML = count;		
    }