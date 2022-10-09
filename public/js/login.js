// async function loginFormHandler(event) {
//     event.preventDefault();
  
//     const username = document.querySelector('#username-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
  
//     if (username && password) {
//       const response = await fetch('/api/users/login', {
//         method: 'post',
//         body: JSON.stringify({
//           username,
//           password
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });
  
//       if (response.ok) {
//         document.location.replace('/dashboard');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   }
  

// document.querySelector('#login-form').addEventListener('submit', loginFormHandler);

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector("#name-signup").value.trim();
//   const email = document.querySelector("#email-signup").value.trim();
//   const password = document.querySelector("#password-signup").value.trim();

//   if (name && email && password) {
//     const response = await fetch("/api/users", {
//       method: "POST",
//       body: JSON.stringify({ name, email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     console.log(name, email, password);

//     if (response.ok) {
//       document.location.replace("/profile");
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// document
//   .querySelector(".login-form")
//   .addEventListener("submit", loginFormHandler);

// document
//   .querySelector(".signup-form")
//   .addEventListener("submit", signupFormHandler);

// Login form
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(email, password);

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

  // Signup form
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password && email) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");

      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);


// Logout form
// async function logout() {
//   const response = await fetch("/api/users/logout", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//   });

//   if (response.ok) {
//     document.location.replace("/");
//   } else {
//     alert(response.statusText);
//   }
// }

// document.querySelector("#logout").addEventListener("click", logout);