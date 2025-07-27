const contactBtn = document.getElementById("contact-btn");
const homeBtn = document.getElementById("home-btn");

function goContact() {
  window.location.href = "/contact/contact.html";
}
contactBtn.addEventListener("click", goContact);

function goHome() {
  window.location.href = "/home/home.html";
}
homeBtn.addEventListener("click", goHome);
