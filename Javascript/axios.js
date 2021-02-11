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
      console.log(arr);
      return arr;
    })
    .then((arr) => {
      let tblShow;
        arr.forEach((element) => {
          tblShow = `<table>
            <tr>
              <th>UserID</th>
              <th>Title</th>
          </tr>
          <tr>
          <td>${element.userId}</td>
          <td>${element.title}</td>
          </tr>

            </table>`;
        });
     
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
      document.getElementById("tbl").innerHTML = tblShow;
    });
}
