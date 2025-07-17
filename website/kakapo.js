document.querySelector(".dropbtn").addEventListener("click", () => {
  document.querySelector(".dropdown-content").classList.toggle("show");
});

// Optional: Close dropdown if user clicks outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }
};
