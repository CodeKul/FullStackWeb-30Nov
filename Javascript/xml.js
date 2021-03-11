function getUserValues() {
  let userid = document.getElementById("userid").value;
  let id = document.getElementById("id").value;
  let title = document.getElementById("title").value;
  let status = document.getElementById("complete").checked;
  let completionStatus;
  if (status) {
    completionStatus = document.getElementById("complete").value;
  } else {
    completionStatus = document.getElementById("complete").value =
      "Not Completed";
  }
  let user = {
    userid: userid,
    id: id,
    title: title,
    status: completionStatus,
  };
  console.log(user);
  return user;
}

function sendData() {
  let userData = getUserValues();
  let p = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-type": "application/json" },
  });
  p.then(function (response) {
    if (response.status == 201) {
      console.log(response.json());
      document.getElementById("msg").innerHTML = "Registered Successfully";
    }
  }).catch(function (err) {
    document.getElementById("msg").innerHTML = err;
  });
  console.log(p);
}

function getData() {
  let p = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
   p.then(function (response) {
      let output = response.json();
      return output;
    })
    .then(function (output) {
      console.log(output);
      let tblData = `<table>
                        <tr>
                        <th>id</th>
                        <th>User Id</th>
                        <th>body</th>
                        <th>title</th>
                        </tr>`;
      output.map((element) => {
        tblData += `<tr>
                <td>${element.id}</td>
                <td>${element.userId}</td>
                <td>${element.body}</td> 
                <td>${element.title}</td>
        </tr>`;
      });
      document.getElementById("tbl").innerHTML = tblData;
    })
    .catch(function (err) {
      document.getElementById("msg").innerHTML = err;
    });
}
