(() => {
  const menuBtnRef = document.querySelector("[data-mobile-button]");
  const mobileMenuRef = document.querySelector("[data-mobile-container]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();