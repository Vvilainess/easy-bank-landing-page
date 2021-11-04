const hamburgerBtn = document.querySelector(".hamburger-btn");
const barsBtn = document.querySelectorAll(".hamburger-btn > span");
const miniMenu = document.querySelector(".menu-block");
const overlay = document.querySelector("#overlay");
console.log(overlay);
function main() {
    hamburgerBtn.onclick = () => {
        miniMenu.classList.toggle("open");
        barsBtn.forEach((bar) => {
            bar.classList.toggle("change");
        });
        overlay.classList.toggle("open");
    };
}
main();
