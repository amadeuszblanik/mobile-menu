document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".button").onclick = function() {
    document.querySelector(".app_navbar").classList.toggle("isExpanded");
  }
});