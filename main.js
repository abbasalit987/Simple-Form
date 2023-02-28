console.log('Hello World!');
// console.log(document.getElementsByName('field1'));

let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // handle submit
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;

    fullName = firstName + ' ' + lastName;
    console.log(fullName);
    eMail = document.getElementById('eMail').value;
    var x = document.getElementById("subject");
    var i = x.selectedIndex;
    subject = document.getElementById("subject").innerHTML = x.options[i].text;

    localStorage.setItem('fullName',fullName);
    localStorage.setItem('email',eMail);
    localStorage.setItem('subject',subject);
  });
