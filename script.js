document.addEventListener("DOMContentLoaded", () => {
  // ----- Mobile menu -----
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  const closeMenu = () => {
    if (!menu) return;
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    menu.classList.add("opacity-0");
    menu.classList.remove("opacity-100");
    document.body.style.overflow = "";
  };

  if (btn && menu) {
    btn.addEventListener("click", () => {
      const isHidden = menu.classList.contains("hidden");
      if (isHidden) {
        menu.classList.remove("hidden");
        menu.classList.add("flex");
        menu.scrollTop = 0;
        requestAnimationFrame(() => {
          menu.classList.remove("opacity-0");
          menu.classList.add("opacity-100");
        });
        document.body.style.overflow = "hidden";
      } else {
        closeMenu();
      }
    });

    menu.querySelectorAll(".mobile-link").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });
  }

  // ----- Sticky header styling on scroll -----
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const applyNavbarStyle = () => {
      const scrolled = window.scrollY > 8;

      navbar.classList.toggle("bg-white/85", scrolled);
      navbar.classList.toggle("backdrop-blur", scrolled);
      navbar.classList.toggle("border-b", scrolled);
      navbar.classList.toggle("border-slate-100", scrolled);
      navbar.classList.toggle("shadow-sm", scrolled);

      navbar.classList.toggle("py-4", scrolled);
      navbar.classList.toggle("py-6", !scrolled);
    };

    applyNavbarStyle();
    window.addEventListener("scroll", applyNavbarStyle, { passive: true });
  }
});