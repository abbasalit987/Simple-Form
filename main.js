console.log('Hello World!');
// console.log(document.getElementsByName('field1'));

let loginForm = document.getElementById("loginForm");
function save(event) {
    
    event.preventDefault();

    firstName = event.target.field1.value;
    lastName = event.target.field2.value;

    fullName = firstName + ' ' + lastName;
    console.log(fullName);
    eMail = event.target.field3.value;
    var x = document.getElementById("subject");
    var i = x.selectedIndex;
    subject = event.target.field4.value = x.options[i].text;

    let user_details = {
        name: fullName,
        email_id : eMail,
        subject_opted : subject
    };

    user_details_serialized = JSON.stringify(user_details);
    console.log(user_details_serialized);

    localStorage.setItem(eMail,user_details_serialized);
    addUser(user_details);
  }

  function addUser(user_details) {
    
    const parentElem = document.getElementById('users');
    const childElem = document.createElement('li');
    childElem.textContent = user_details.name + ' - ' + user_details.email_id + ' - ' + user_details.subject_opted;

    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button'
    deleteBtn.value = 'Delete'
    deleteBtn.onclick = () => {
        localStorage.removeItem(user_details.email_id);
        parentElem.removeChild(childElem);
    }
    childElem.appendChild(deleteBtn);
    parentElem.appendChild(childElem);
  }



  

