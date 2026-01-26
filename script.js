// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const items = document.querySelectorAll(".mobile-item");

let menuOpen = false;

gsap.set(items, { y: 20, opacity: 0 });

function openMenu() {
  mobileMenu.classList.remove("hidden");

  gsap.fromTo(
    mobileMenu,
    { opacity: 0 },
    { opacity: 1, duration: 0.3, ease: "power2.out" },
  );

  gsap.to(items, {
    y: 0,
    opacity: 1,
    stagger: 0.08,
    duration: 0.4,
    ease: "power3.out",
    delay: 0.1,
  });

  menuOpen = true;
}

function closeMenu() {
  gsap.to(items, {
    y: 20,
    opacity: 0,
    stagger: 0.05,
    duration: 0.25,
    ease: "power2.in",
  });

  gsap.to(mobileMenu, {
    opacity: 0,
    duration: 0.3,
    ease: "power2.in",
    delay: 0.2,
    onComplete: () => {
      mobileMenu.classList.add("hidden");
    },
  });

  menuOpen = false;
}

menuBtn.addEventListener("click", () => {
  menuOpen ? closeMenu() : openMenu();
});

// Fecha ao clicar em qualquer item
mobileMenu.addEventListener("click", closeMenu);
