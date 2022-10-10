// New Post
const newPost = async (e) => {
  e.preventDefault();

  const post = document.querySelector("#post_text").value.trim();

  if (post) {
    const response = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({ title, content, user_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/api/post");
    } else {
      alert("Failed to post new content");
    }
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newPost);
