// async function loginFormHandler(e) {
//   e.preventDefault();

//   const email = document.querySelector("#email-login").value.trim();
//   const password = document.querySelector("#password-login").value.trim();

//   if (email && password) {
//     const response = await fetch("/api/users/login", {
//       method: "POST",
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/dashboard");
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

const loginFormHandler = async (e) => {
    e.preventDefault();
    const name = document.querySelector("#project-name").value.trim();
    const needed_funding = document
      .querySelector("#project-funding")
      .value.trim();
    const description = document.querySelector("#project-desc").value.trim();

    if (name && needed_funding && description) {
      const response = await fetch(`/api/projects`, {
        method: "POST",
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to create project");
      }
    }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
