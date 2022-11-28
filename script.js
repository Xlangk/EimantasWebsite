const navButton = document.querySelector("nav:nth-child(1) section:nth-child(3) button");
const mobileNav = document.querySelector(".nav-side");
const navCover = document.querySelector(".nav-cover");

let navOpen = false;

handleNavVis();

navButton.addEventListener("click", () => {
   navOpen = !navOpen;
   handleNavVis();
});

navCover.addEventListener("click", () => {
    navOpen = false;
    handleNavVis();
});

function handleNavVis() {
    if (navOpen) {
        navCover.classList.remove("fade");
        mobileNav.classList.remove("side-right");
        return;
    }

    navCover.classList.add("fade");
    mobileNav.classList.add("side-right");
}
