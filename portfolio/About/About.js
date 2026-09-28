const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });
});
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#000000" },
        shape: { type: "circle" },
        opacity: { value: 0.4 },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#999",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3
        }
    }
});