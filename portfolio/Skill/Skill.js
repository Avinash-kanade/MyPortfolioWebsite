const progressBars = document.querySelectorAll(".progress");

window.addEventListener("load", () => {

    progressBars.forEach(bar => {

        let width = bar.style.width;
        bar.style.width = "0";

        setTimeout(() => {
            bar.style.transition = "2s";
            bar.style.width = width;
        }, 300);

    });

});