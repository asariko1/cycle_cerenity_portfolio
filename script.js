document.addEventListener("DOMContentLoaded", () => {
  // ----- Mobile menu -----
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  const openMenu = () => {
    if (!menu) return;
    menu.classList.remove("hidden");
    requestAnimationFrame(() => {
      menu.classList.remove("opacity-0");
    });
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    if (!menu) return;
    menu.classList.add("opacity-0");
    setTimeout(() => {
      menu.classList.add("hidden");
      document.body.style.overflow = "";
    }, 300);
  };

  if (btn && menu) {
    btn.addEventListener("click", () => {
      const isHidden = menu.classList.contains("hidden");
      if (isHidden) {
        openMenu();
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