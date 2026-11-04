
const installButtons = document.querySelectorAll(".install-button");
const errorDialog = document.querySelector(".error-dialog");
const closeButton = document.querySelector(".dialog-close");
const okButton = document.querySelector(".dialog-ok");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

function showInstallError() {
  errorDialog.showModal();
}

function closeInstallError() {
  errorDialog.close();
}

installButtons.forEach((button) => {
  button.addEventListener("click", showInstallError);
});

closeButton.addEventListener("click", closeInstallError);
okButton.addEventListener("click", closeInstallError);

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
