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
  let dataUser = userValues();
  axios
    .post("https://jsonplaceholder.typicode.com/posts", dataUser, {
      headers: { "Content-type": "application/json" },
    })
    .then((response) => {
      console.log(response.data);
    });

  axios
    .get("https://jsonplaceholder.typicode.com/posts", {
      headers: { "Content-type": "application/json" },
    })
    .then((response) => {
      console.log(response);
     
      let arr = response.data;
      // let arr =response.json()
      console.log(arr);
      return arr;
    })
    .then((arr) => {
      let tblShow = `<table>
      <tr>
              <th>Body</th>
              <th>ID</th>
              <th>Title</th>
              <th>User Id</th>
          </tr>
        `;

      arr.map((element) => {
        tblShow += `<tr>
          <td>${element.body}</td>
          <td>${element.id}</td>
          <td>${element.title}</td>
          <td>${element.userId}</td>
          </tr>
          `;
      });
      document.getElementById("tbl").innerHTML = tblShow;

      // arr.map((item) => {
      //   tblShow = `<table>
      //     <tr>
      //       <th>UserID</th>
      //       <th>Title</th>
      //   </tr>
      //   <tr>
      //   <td>${item.userId}</td>
      //   <td>${item.title}</td>
      //   </tr>

      //     </table>`;
      //});
    });
}
