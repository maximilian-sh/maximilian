const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

const track = document.getElementById("image-track");

const handleOnDown = e => {
    track.dataset.mouseDownAt = e.clientX;
};

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const MAX_MOUSE_MOVEMENT = window.innerWidth / 2;

    const mouseMovement = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        percentage = (mouseMovement / MAX_MOUSE_MOVEMENT) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -85);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    const images = track.getElementsByClassName("image");
    for (const image of images) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
};

track.addEventListener('mousedown', handleOnDown);
track.addEventListener('touchstart', e => handleOnDown(e.touches[0]));
track.addEventListener('mouseup', handleOnUp);
track.addEventListener('touchend', e => handleOnUp(e.touches[0]));
track.addEventListener('mousemove', handleOnMove);
track.addEventListener('touchmove', e => handleOnMove(e.touches[0]));
