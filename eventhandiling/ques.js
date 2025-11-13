
const faqs = document.querySelectorAll(".faq");

for (let i of faqs) {
  i.addEventListener("click", function () {
    i.classList.toggle("active");
  });
}