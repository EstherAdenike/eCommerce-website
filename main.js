function increase(element) {
  const numberElement = element.previousElementSibling;
  numberElement.textContent = parseInt(numberElement.textContent) + 1;
}

function decrease(element) {
  const numberElement = element.nextElementSibling;
  const current = parseInt(numberElement.textContent);
  if (current > 1) {
    numberElement.textContent = current - 1;
  }
}

const emailaddress = document.getElementById("email");
const password = document.getElementById("password");
function details(event) {
  event.preventDefault();
  localStorage.setItem("email", emailaddress.value);
  localStorage.setItem("password", password.value);
  console.log(localStorage);
  console.log("Email and password saved to localStorage!");
  window.location.href = "products.html";
}
