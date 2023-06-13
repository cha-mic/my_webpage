const head = document.getElementById("headline");

head.addEventListener("mouseenter", function() {
  // head.style.color = 'black';
  // head.style.color = "linear-gradient(to right, yellow, green)";
  head.style.backgroundImage = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
  head.style.color = "white";
});

head.addEventListener("mouseleave", function() {
  head.style.backgroundImage = "";
  head.style.color = "";
});