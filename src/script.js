document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});
