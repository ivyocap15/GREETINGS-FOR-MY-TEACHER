const celebrateBtn = document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click", () => {
    for (let i = 0; i < 35; i++) {
        const heart = document.createElement("div");
        heart.textContent = ["♡", "♥", "✿", "✧"][Math.floor(Math.random() * 4)];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "50%";
        heart.style.fontSize = Math.floor(Math.random() * 18 + 15) + "px";
        heart.style.color = "#b65d78";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const animation = heart.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                {
                    transform:
                        `translateY(-${Math.random() * 500 + 200}px)
                         rotate(${Math.random() * 720 - 360}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 1800 + Math.random() * 1200,
                easing: "ease-out"
            }
        );

        animation.onfinish = () => heart.remove();
    }
});
