const aboutMe = document.getElementById("about-btn");
const contactMe = document.getElementById("contact-btn");
const viewWorkBtn = document.getElementById("view-work");

function goAboutMe() {
  window.location.href = "/about/about.html";
}
aboutMe.addEventListener("click", goAboutMe);

function goContact() {
  window.location.href = "/contact/contact.html";
}
contactMe.addEventListener("click", goContact);

function viewWork() {
  window.open("https://github.com/Amirhosein-Abbasi1");
}
viewWorkBtn.addEventListener("click", viewWork);
