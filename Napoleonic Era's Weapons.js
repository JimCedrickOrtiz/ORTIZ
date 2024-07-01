function toggleNav() {
    var sidenav = document.getElementById("sidenav");
    var mainContent = document.querySelector(".main-content");
    var openBtn = document.querySelector(".openbtn");
  
    if (sidenav.style.width === "250px") {
      sidenav.style.width = "0";
      mainContent.style.marginLeft = "0";
      openBtn.innerHTML = "☰";
    } else {
      sidenav.style.width = "250px";
      mainContent.style.marginLeft = "250px";
      openBtn.innerHTML = "☰";
    }
  }
  


  // When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
