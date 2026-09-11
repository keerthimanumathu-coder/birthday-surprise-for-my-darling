/* =========================
   SECRET CODE
========================= */

const SECRET_CODE = "2807";


function unlock() {

    const enteredCode =
        document.getElementById("secretCode").value;

    const error =
        document.getElementById("error");

    if (enteredCode === SECRET_CODE) {

        document.getElementById("page0")
            .classList.remove("active");

        document.getElementById("page1")
            .classList.add("active");

        startMusic();

        createConfetti();

    } else {

        error.innerText =
            "Wrong code 😜 Try again!";

        document.getElementById("secretCode").value = "";
    }
}


/* =========================
   PAGE NAVIGATION
========================= */

function nextPage(number) {

    const current =
        document.querySelector(".page.active");

    if (current) {
        current.classList.remove("active");
    }

    const next =
        document.getElementById("page" + number);

    if (next) {

        setTimeout(() => {
            next.classList.add("active");

            createConfetti();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 100);
    }
}


/* =========================
   MUSIC
========================= */

function startMusic() {

    const music =
        document.getElementById("bgmusic");
    if(!music) return;

    music.volume = 0.5;

    music.play().catch(() => {
        console.log("Music needs user interaction.");
    });
}


/* =========================
   2 YEAR COUNTER
========================= */

const startDate =
    new Date("July 28, 2024 00:00:00");

function updateCounter() {

    const now = new Date();

    let difference =
        now - startDate;

    if (difference < 0) {
        return;
    }

    const totalSeconds =
        Math.floor(difference / 1000);

    const days =
        Math.floor(totalSeconds / 86400);

    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );

    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );

    const seconds =
        totalSeconds % 60;

    let years =
        now.getFullYear() -
        startDate.getFullYear();

    const anniversary =
        new Date(
            now.getFullYear(),
            startDate.getMonth(),
            startDate.getDate()
        );

    if (now < anniversary) {
        years--;
    }

    document.getElementById("years")
        .innerText = Math.max(years, 0);

    document.getElementById("days")
        .innerText = days;

    document.getElementById("hours")
        .innerText = hours;

    document.getElementById("minutes")
        .innerText = minutes;

    document.getElementById("seconds")
        .innerText = seconds;
}

setInterval(updateCounter, 1000);

updateCounter();


/* =========================
   DIFFERENT CONFETTI
========================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );

    const symbols = [
        "❤️",
        "💗",
        "✨",
        "⭐",
        "🎀",
        "💖",
        "🌸",
        "💕",
        "🥳",
        "🎉"
    ];

    for (let i = 0; i < 35; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");

        piece.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.fontSize =
            (12 + Math.random() * 20) + "px";

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6000);
    }
}


/* =========================
   ENTER KEY FOR CODE
========================= */

document
    .getElementById("secretCode")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            unlock();
        }

    });
    // ================= BALLOON MEMORY REVEAL =================

let openedMemories = 0;

function openMemory(number) {

    const balloon = document.querySelector(".balloon" + number);
    const memory = document.getElementById("memory" + number);

    balloon.classList.add("pop");

    setTimeout(() => {
        memory.classList.add("show");

        memory.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        createConfetti();

        openedMemories++;

        if (openedMemories === 5) {
            setTimeout(() => {
                document.getElementById("lastSurprise").classList.add("show");

                document.getElementById("lastSurprise")
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                createConfetti();
            }, 1000);
        }

    }, 400);
}