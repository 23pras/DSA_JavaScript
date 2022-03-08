function getUsers() {
      let url = "https://api.github.com/users";

      let promiseObj = fetch(url)
        .then((resolved) => {
          return resolved.json();
        })
        .then((jsondata) => {
          let usernames = jsondata.map((ele) => {
            return ele.login;
          });
          return usernames;
        });

      return promiseObj;
    }
    let output = getUsers();
    output.then((value) => console.log(value));