const loginFormHandler = async event => {
  event.preventDefault()

  const username = document.querySelector("#username-login").value.trim()
  const email = document.querySelector("#email-login").value.trim()
  const password = document.querySelector("#password-login").value.trim()

  if ((email && password) || (username && password)) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {"Content-Type": "application/json"},
    })

    if (response.ok) {
      document.location.replace("/")
    } else {
      alert("Failed to log in")
    }
  }
}

document
  .querySelector("#signin-button")
  .addEventListener("click", loginFormHandler)

const signUpFormHandler = async event => {
  event.preventDefault()

  const email = document.querySelector("#email-signup").value.trim()
  const password = document.querySelector("#password-signup").value.trim()
  const username = document.querySelector("#username-signup").value.trim()

  if (email && password && username) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({email, password, username}),
      headers: {"Content-Type": "application/json"},
    })

    if (response.ok) {
      document.location.replace("/")
    } else {
      alert("Failed to signup in")
    }
  }
}

document
  .querySelector("#signup-button")
  .addEventListener("click", signUpFormHandler)
