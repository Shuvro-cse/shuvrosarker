/* ============================
   MOBILE MENU
============================ */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const icon =
            menuBtn.querySelector("i");

        if (navLinks.classList.contains("show")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

}


/* ============================
   DARK MODE
============================ */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


updateThemeIcon();


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            localStorage.setItem(
                "theme",
                "light"
            );

        }


        updateThemeIcon();

    });

}


function updateThemeIcon() {

    if (!themeToggle) return;


    const icon =
        themeToggle.querySelector("i");


    if (
        document.body.classList.contains("dark")
    ) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

}


/* ============================
   TYPING EFFECT
============================ */

const typingElement =
    document.getElementById("typingText");


const words = [

    "IT Student",

    "Developer",

    "Problem Solver",

    "Tech Enthusiast"

];


let wordIndex = 0;

let letterIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typingElement) return;


    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                letterIndex + 1
            );

        letterIndex++;


        if (
            letterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1200
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                letterIndex - 1
            );

        letterIndex--;


        if (letterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    const typingSpeed =
        deleting ? 50 : 90;


    setTimeout(
        typeEffect,
        typingSpeed
    );

}


typeEffect();



/* ============================
   SCROLL REVEAL
============================ */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(
        element => {

            const elementTop =
                element
                    .getBoundingClientRect()
                    .top;


            if (
                elementTop <
                windowHeight - 80
            ) {

                element.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



/* ============================
   PROJECT FILTERING
============================ */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


const projectItems =
    document.querySelectorAll(
        ".project-item"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                btn =>
                    btn.classList.remove(
                        "active"
                    )
            );


            button.classList.add(
                "active"
            );


            const filter =
                button.dataset.filter;


            projectItems.forEach(
                project => {

                    const category =
                        project.dataset.category;


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        project.classList.remove(
                            "hide"
                        );

                    } else {

                        project.classList.add(
                            "hide"
                        );

                    }

                }
            );

        }
    );

});



/* ============================
   CURRENT YEAR
============================ */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}