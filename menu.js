const menuButton = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");
const siteHeader = document.querySelector(".brand-header");

if (menuButton && siteMenu && siteHeader) {
  const setMenu = (isOpen) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    siteHeader.classList.toggle("is-menu-open", isOpen);
  };

  menuButton.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") !== "true");
  });

  siteMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenu(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenu(false);
    }
  });
}
