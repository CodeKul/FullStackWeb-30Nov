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
  return userData;
}

function save() {
  let result = userValues();
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xmlHttp.setRequestHeader("Content-Type", "application/json");
  xmlHttp.send(result);

  xmlHttp.onload = function () {
    if (xmlHttp.status == 201) {
      console.log(`Response : ${xmlHttp.response}`);
    } else {
      console.log(`Status code:${xmlHttp.response.status}`);
    }
  };

  xmlHttp.onerror = function () {
    console.log("Request failed");
  };
}
