// website
// https://github.com/masai-school/api-mocker/wiki/Authentication-API

//  main  api link is
//   https://masai-api-mocker.herokuapp.com

//   register api link
// https://masai-api-mocker.herokuapp.com/auth/register

// login api link
//  https://masai-api-mocker.herokuapp.com/auth/login

// get req
// https://masai-api-mocker.herokuapp.com/user/${username}

let register = async () => {
  try {
    let register_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("pass").value,
      username: document.getElementById("username").value,
      mobile: document.getElementById("mobile").value,
      description: document.getElementById("description").value,
    };
    register_data = JSON.stringify(register_data);
    let res = await fetch(
      "https://masai-api-mocker.herokuapp.com/auth/register",
      {
        method: "POST",
        body: register_data,
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    console.log("data", data);
    goToLogin_page(data);
  } catch (err) {
    console.log("err", err);
    // let a = "hello";
  }
};
let Login = async () => {
  try {
    let login_data = {
      username: document.getElementById("login_username").value,
      password: document.getElementById("login_password").value,
    };
    let login_data_json = JSON.stringify(login_data);
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: login_data_json,
      headers: {
        "content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log("data", data);
    getUser(login_data.username, data.token);
  } catch (err) {
    console.log("err", err);
  }
};
let getUser = async (username, token) => {
  try {
    let res = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${username}`,
      {
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let data = await res.json();
    console.log("data", data);
    SuccessAndGo(data, username);
  } catch (err) {
    console.log("err", err);
  }
};

let SuccessAndGo = (data, username) => {
  if (username === data.username) {
    window.location.href = "index.html";
  } else {
    alert("Invalid Username / Password");
  }
};

// html input action by click event
document.querySelector("#name").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.querySelector("#email").style.display = "block";
  }
});
//
document.querySelector("#email").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.querySelector("#pass").style.display = "block";
  }
});
//
document.querySelector("#pass").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.querySelector("#username").style.display = "block";
  }
});
//
document.querySelector("#username").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.querySelector("#mobile").style.display = "block";
  }
});
//
document.querySelector("#mobile").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.querySelector("#description").style.display = "block";
  }
});

//
let goToLogin_page = (data) => {
  if (data.message) {
    alert("sign_In Succesful");
    window.location.href = "auth_login.html";
  }
};
