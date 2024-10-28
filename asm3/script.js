document.querySelectorAll("building1 img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector("popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};
// these are the code for the popup images, I tried to code but they did not work out like I want
