const form = document.getElementById("form");
const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const areaMessage = document.getElementById("area-message");
const submitBtn = document.getElementById("submit-btn");
const homeBtn = document.getElementById("home-btn");

form.addEventListener("submit", stop);

function stop(e) {
  e.preventDefault();

  if (
    inputName.value.trim() === "" ||
    inputEmail.value.trim() === "" ||
    areaMessage.value.trim() === ""
  ) {
    alert("Fill out the form completely.");
  } else {
    alert("The form submitted successfully.");
    form.reset();
  }
}

function goHome() {
  window.location.href = "/home/home.html";
}
homeBtn.addEventListener("click", goHome);
