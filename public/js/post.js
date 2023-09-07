const newFormHandler = async function (event) {
  event.preventDefault()

  const title = document.querySelector("#titleInput").value
  const caption = document.querySelector("#captionInput").value

  const newPost = await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      caption,
    }),
  })

  if (newPost.ok) {
    document.location.replace("/")
  } else {
    alert("Failed to create post")
  }
}

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler)
