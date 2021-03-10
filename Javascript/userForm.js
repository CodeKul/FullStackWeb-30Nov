function userValues() {
  var userId = document.getElementById("userid").value;
  var id = document.getElementById("id").value;
  var title = document.getElementById("title").value;
  if (document.getElementById("complete").checked) {
    var completed = document.getElementById("complete").value;
  } else {
    var completed = (document.getElementById("complete").value = "No");
  }

  let userData = JSON.stringify({
    userId: userId,
    id: id,
    title: title,
    completed: completed,
  });
  console.log(userData);
  //return userData;
}

function save() {
  let user = userValues();
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: user,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    console.log(response.json());
    //console.log(typeof response);
  });

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    //let result = response.json();
    // let output = JSON.parse(result);
    // output.title = "Hello World";
    console.log(response);
  });
}

// function jsonString() {
// let person = '{firstName:"ABC",lastName:"XYZ"}';
// let jsPerson = JSON.parse(person);
// jsPerson.firstName = "qaz";
// console.log(jsPerson);
// }
// jsonString();
