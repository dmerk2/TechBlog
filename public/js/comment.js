const newComment = async (e) => {
  e.preventDefault();

  const comment = document.querySelector("#comment_text").value.trim();

  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ comment_text, user_id, post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/comments");
    } else {
      alert("Failed to post comment!");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newComment);
