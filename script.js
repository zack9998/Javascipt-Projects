const form = document.querySelector("form");
const input = document.querySelector("input");
const errorSpan = document.querySelector(".error");

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();

  if (input.value.trim() === "") {
    errorSpan.textContent = "Valid email required";
    input.style.backgroundColor = "hsl(4, 100%, 67%)";
    input.style.color = "red";
  } else if (!input.value.trim().includes("@", ".")) {
    errorSpan.textContent = "Valid email required : shall contain '@'. ";
    input.style.backgroundColor = "hsl(4, 100%, 67%)";
    input.style.color = "red";
  } else {
    errorSpan.textContent = "";
    window.location.href = "succes_page.html";
  }
}
