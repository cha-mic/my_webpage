const head = document.getElementById("headline");

head.addEventListener("mouseenter", function() {
  this.style.color = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
});

head.addEventListener("mouseleave", function() {
  this.style.color = "";
});