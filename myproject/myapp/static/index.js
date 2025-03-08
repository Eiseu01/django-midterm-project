const deleteBtn = document.querySelectorAll(".deleteBtn");
const tr = document.querySelectorAll("tr");

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!confirm("Are you sure you want to delete this student?")) {
      e.preventDefault();
    }
  });
});

tr.forEach((t, index) => {
  if (index % 2 !== 0) {
    t.style.backgroundColor = "#e6e6e6";
  }
});
