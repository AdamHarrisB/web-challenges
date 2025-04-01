console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//document.createElement()

const article = document.createElement("article");
const button = document.createElement("button");
const footer = document.createElement("footer");
const para = document.createElement("para");
const span = document.createElement("span");


//After generating an element, you need to place the element into the DOM. For this, you can use the .append method. It places the element as the last child into the respective element.

document.body.append(article);
article.classList.add("post");
article.append(para);
para.classList.add("post__content");
article.append(footer);
footer.append(span);
footer.append(button);
para.textContent = "Lorem ipsum dolor, sit amet consectetur adipiscing elit.";
button.textContent = "♥ Like";
footer.classList.add("post__footer");
span.classList.add("post__username")
button.classList.add("post__button");
span.textContent = "@username";
button.addEventListener("click", () => {
  console.log("It works!");
});
