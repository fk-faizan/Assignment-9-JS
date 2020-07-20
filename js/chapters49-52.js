// 1. Create a signup form and display form data in your web page on submission.

// Solution:
    function task1() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var password = document.getElementById('password').value;
        var display = document.getElementById('display');

        var row = display.insertRow();
        var cell1 = row.insertCell()
        var cell2 = row.insertCell()
        var cell3 = row.insertCell()
        var cell4 = row.insertCell()
        cell1.innerHTML = name
        cell2.innerHTML = email
        cell3.innerHTML = phone
        cell4.innerHTML = password
    }


// 2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.

// Solution:
    function readMore(){
        var message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus velit temporibus voluptatem"
        var pera = document.getElementById('pera')
        pera.innerHTML=message 
    }


// 3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.

// Unsolve:
