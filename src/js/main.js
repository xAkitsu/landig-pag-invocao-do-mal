document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".hero h1");

  setInterval(() => {
    title.style.opacity = title.style.opacity === "0.2" ? "1" : "0.2";
  }, 1500);
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => {
    item.classList.add("hidden");
    observer.observe(item);
  });
});
