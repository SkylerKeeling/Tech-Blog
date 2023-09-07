const newFormHandler = async function (event) {
  event.preventDefault()

  const title = document.querySelector("#titleInput").value
  const caption = document.querySelector("#captionInput").value

  console.log(title, caption)

  await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      caption,
    }),

    headers: {"Content-Type": "application/json"},
  })
  console.log(title, caption)
  //if (response.ok) {
  //document.location.replace("/")
  // } else {
  //   alert("Failed to create post")
  // }
}

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler)
