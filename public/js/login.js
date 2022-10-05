// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   console.log(email, password);

//   if (email && password) {
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     //console.log(response);

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to log in.');
//     }
//   }
// };

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const username = document.querySelector('#username-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   console.log(username, email, password);

//   if (username && email && password) {
//     const response = await fetch("/api/users", {
//       method: "POST",
//       body: JSON.stringify({ username, email, password }),
//       headers: { "Content-Type": "application/json" },
//     });
//     console.log(response.ok)
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to sign up.');
//     }
//   }
// };

// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);

const loginFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector("#username-login");
  const password = document.querySelector("#password-login");

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to login");
  }
};
const signupFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup");
  const password = document.querySelector("#password-signup").value.trim();
  console.log(username);
  console.log(password);
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
