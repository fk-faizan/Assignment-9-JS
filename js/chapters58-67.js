// ---------- Chapter 58 - 67 "DOM" ----------


// 1. Consider you have following code snippet:
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

// Solution:
    // i and ii 
    var mainContent = document.getElementById('main-content');
    console.log(mainContent.childNodes)

    // iii
    var render = document.getElementsByClassName('render');

    for(var i = 0; i < render.length; i++) {
        var aaa = render[i].innerHTML;
        document.write(aaa + "<br>");
    }

    // iv
    var firstName = document.getElementById("first-name").value = "Faizan";

    // v
    var lastName = document.getElementById("last-name").value = "Khan";

    var email = document.getElementById("email").value = "faizankhn.fk97@gmail.com";

    // email.setAttribute("value", "faizankhn.fk97@gmail.com")


// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”

// Solution:
    // i
    var one = document.getElementById("form-content").nodeType;

    // ii
    var two = document.getElementById('lastName').nodeType;
    var twoi = s.previousSibling
    var twoii = s.nextSibling