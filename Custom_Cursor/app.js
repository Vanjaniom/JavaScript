let cursor = document.querySelector(".cursor");
let img = document.querySelector("img")
document.addEventListener("mousemove", function (e) {
  img.style.left = e.clientX + "px";
  img.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
