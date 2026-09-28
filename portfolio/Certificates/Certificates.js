const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
        rgba(0,217,255,0.15),
        rgba(255,255,255,0.03) 50%)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "rgba(255,255,255,0.03)";
    });
});
const icons = document.querySelectorAll(".social-icons a");

icons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        icon.style.transform = "translateY(-5px)";
    });

    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "translateY(0)";
    });
});