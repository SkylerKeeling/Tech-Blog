const newFormHandler = async function (event) {
  event.preventDefault()

  const title = document.querySelector("#titleInput").value
  const caption = document.querySelector("#captionInput").value

  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      caption,
    }),
    headers: {"Content-Type": "application/json"},
  })

  document.location.replace("/")
}

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler)
