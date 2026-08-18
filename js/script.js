/* =========================================================
   ADITYA KUMAR — DATA ANALYST PORTFOLIO
========================================================= */


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach((element) => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("show");

        });

    }



    /* =====================================================
       ACTIVE NAVBAR
    ===================================================== */

    const sections =
        document.querySelectorAll("main section");


    const navLinks =
        document.querySelectorAll(".nav-links a");


    function updateActiveNav() {

        let currentSection = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 180;


            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav,
        {
            passive: true
        }
    );


    updateActiveNav();



    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const portfolioHeader =
        document.querySelector(".header");


    function updateHeader() {

        if (!portfolioHeader) {
            return;
        }


        if (window.scrollY > 50) {

            portfolioHeader.style.background =
                "rgba(8, 9, 13, 0.94)";

            portfolioHeader.style.boxShadow =
                "0 10px 40px rgba(0,0,0,0.28)";

        } else {

            portfolioHeader.style.background =
                "rgba(8, 9, 13, 0.82)";

            portfolioHeader.style.boxShadow =
                "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileMenuButton =
        document.querySelector(".mobile-menu-btn");


    const navigation =
        document.querySelector(".nav-links");


    if (
        mobileMenuButton &&
        navigation
    ) {

        mobileMenuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    navigation.classList.toggle(
                        "mobile-open"
                    );


                mobileMenuButton.innerHTML =
                    isOpen
                        ? '<i class="fa-solid fa-xmark"></i>'
                        : '<i class="fa-solid fa-bars"></i>';

            }
        );


        navigation
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        navigation.classList.remove(
                            "mobile-open"
                        );


                        mobileMenuButton.innerHTML =
                            '<i class="fa-solid fa-bars"></i>';

                    }
                );

            });

    }



    /* =====================================================
       TOOLKIT — INTERACTIVE RADIAL CHART
    ===================================================== */

    const radialChart =
        document.getElementById("radialChart");


    const toolkitTitle =
        document.getElementById("toolkitTitle");


    const toolkitDescription =
        document.getElementById(
            "toolkitDescription"
        );


    const toolItems =
        document.querySelectorAll(".tool-item");


    const toolProgress = {

        "SQL": 90,

        "Python": 75,

        "Power BI": 70,

        "Excel": 70

    };


    function updateToolkit(toolItem) {

        if (!toolItem) {
            return;
        }


        const tool =
            toolItem.dataset.tool ||
            "SQL";


        const description =
            toolItem.dataset.description ||
            "";


        const progress =
            Number(
                toolItem.dataset.progress ||
                toolProgress[tool] ||
                70
            );


        toolItems.forEach((item) => {

            item.classList.remove(
                "active"
            );

        });


        toolItem.classList.add(
            "active"
        );


        if (toolkitTitle) {

            toolkitTitle.textContent =
                tool;

        }


        if (toolkitDescription) {

            toolkitDescription.textContent =
                description;

        }


        if (radialChart) {

            radialChart.style.setProperty(
                "--progress",
                `${progress}%`
            );

        }

    }


    toolItems.forEach((item) => {

        item.addEventListener(
            "click",
            () => {

                updateToolkit(item);

            }
        );

    });


    if (toolItems.length > 0) {

        updateToolkit(
            toolItems[0]
        );

    }



    /* =====================================================
       JOURNEY — INTERACTIVE TIMELINE
    ===================================================== */

    const journeyPoints =
        document.querySelectorAll(
            ".journey-point"
        );


    const journeyTitle =
        document.getElementById(
            "journeyInsightTitle"
        );


    const journeyText =
        document.getElementById(
            "journeyInsightText"
        );


    const journeyNumber =
        document.getElementById(
            "journeyInsightNumber"
        );


    const journeyData = {

        "CSE": {

            number: "01",

            title: "CSE",

            text:
                "Building a strong foundation in computer science, logic and problem-solving."

        },


        "SQL": {

            number: "02",

            title: "SQL",

            text:
                "Working with structured data, queries, joins, CTEs and analytical SQL."

        },


        "Python": {

            number: "03",

            title: "Python",

            text:
                "Using Python to manipulate, explore and analyze datasets."

        },


        "BI": {

            number: "04",

            title: "BI",

            text:
                "Communicating analytical findings through dashboards and visual storytelling."

        }

    };


    function updateJourney(point) {

        if (!point) {
            return;
        }


        const stage =
            point.dataset.stage;


        const data =
            journeyData[stage];


        if (!data) {
            return;
        }


        journeyPoints.forEach((item) => {

            item.classList.remove(
                "active"
            );

        });


        point.classList.add(
            "active"
        );


        if (journeyTitle) {

            journeyTitle.textContent =
                data.title;

        }


        if (journeyText) {

            journeyText.textContent =
                data.text;

        }


        if (journeyNumber) {

            journeyNumber.textContent =
                data.number;

        }

    }


    journeyPoints.forEach((point) => {

        point.addEventListener(
            "click",
            () => {

                updateJourney(point);

            }
        );

    });


    if (journeyPoints.length > 0) {

        updateJourney(
            journeyPoints[0]
        );

    }



    /* =====================================================
       PROFILE PHOTO MODAL
    ===================================================== */

    const profilePhotoBtn =
        document.getElementById(
            "profilePhotoBtn"
        );


    const profileModal =
        document.getElementById(
            "profileModal"
        );


    const profileModalClose =
        document.getElementById(
            "profileModalClose"
        );


    const profileModalOverlay =
        document.getElementById(
            "profileModalOverlay"
        );


    function openProfileModal() {

        if (!profileModal) {
            return;
        }


        profileModal.classList.add(
            "is-open"
        );


        profileModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "profile-modal-open"
        );

    }


    function closeProfileModal() {

        if (!profileModal) {
            return;
        }


        profileModal.classList.remove(
            "is-open"
        );


        profileModal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "profile-modal-open"
        );

    }


    if (
        profilePhotoBtn &&
        profileModal
    ) {

        profilePhotoBtn.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();

                openProfileModal();

            }
        );

    }


    if (profileModalClose) {

        profileModalClose.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();

                closeProfileModal();

            }
        );

    }


    if (profileModalOverlay) {

        profileModalOverlay.addEventListener(
            "click",
            () => {

                closeProfileModal();

            }
        );

    }


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                profileModal &&
                profileModal.classList.contains(
                    "is-open"
                )
            ) {

                closeProfileModal();

            }

        }
    );



    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]:not(#profilePhotoBtn)'
        );


    internalLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                if (
                    targetId ===
                    "#profileModal"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    });



    /* =====================================================
       SKILL → PROJECT NAVIGATION
    ===================================================== */

    const skillLinks =
        document.querySelectorAll(
            "[data-skill-target]"
        );


    skillLinks.forEach((skill) => {

        skill.addEventListener(
            "click",
            (event) => {

                const targetId =
                    skill.dataset.skillTarget;


                const target =
                    document.getElementById(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({

                    behavior:
                        window.matchMedia(
                            "(prefers-reduced-motion: reduce)"
                        ).matches
                            ? "auto"
                            : "smooth",

                    block: "center"

                });


                target.classList.remove(
                    "project-highlight"
                );


                void target.offsetWidth;


                target.classList.add(
                    "project-highlight"
                );


                window.setTimeout(
                    () => {

                        target.classList.remove(
                            "project-highlight"
                        );

                    },
                    1600
                );

            }
        );

    });



    /* =====================================================
       LINE GRAPH + CURSOR ANIMATION
    ===================================================== */

    const canvas =
        document.getElementById(
            "cherryBlossoms"
        );


    if (canvas) {

        const ctx =
            canvas.getContext("2d");


        if (ctx) {

            let width =
                window.innerWidth;


            let height =
                window.innerHeight;


            let dpr = 1;


            let animationFrame;


            let graphPoints = [];


            let mouse = {

                x: width / 2,

                y: height / 2,

                active: false

            };


            let cursorPoint = {

                x: width / 2,

                y: height / 2

            };


            const reducedMotion =
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                );


            /* =================================================
               GRAPH SETTINGS
            ================================================= */

            const GRAPH_POINTS =
                window.innerWidth < 700
                    ? 7
                    : 11;


            const GRAPH_OPACITY =
                0.08;


            const GRAPH_LINE_WIDTH =
                1.1;


            /* =================================================
               RESIZE
            ================================================= */

            function resizeCanvas() {

                width =
                    window.innerWidth;


                height =
                    window.innerHeight;


                dpr =
                    Math.min(
                        window.devicePixelRatio || 1,
                        2
                    );


                canvas.width =
                    width * dpr;


                canvas.height =
                    height * dpr;


                canvas.style.width =
                    `${width}px`;


                canvas.style.height =
                    `${height}px`;


                ctx.setTransform(

                    dpr,

                    0,
                    0,

                    dpr,

                    0,
                    0

                );


                createGraphPoints();

            }


            /* =================================================
               CREATE GRAPH
            ================================================= */

            function createGraphPoints() {

                graphPoints = [];


                const startX =
                    width *
                    0.05;


                const endX =
                    width *
                    0.95;


                const graphWidth =
                    endX -
                    startX;


                const centerY =
                    height *
                    0.50;


                const amplitude =
                    Math.min(
                        height * 0.10,
                        90
                    );


                for (
                    let i = 0;
                    i < GRAPH_POINTS;
                    i++
                ) {

                    const progress =
                        i /
                        (GRAPH_POINTS - 1);


                    const x =
                        startX +
                        graphWidth *
                        progress;


                    /*
                       Fixed analytical-looking
                       movement instead of random noise.
                    */

                    const wave =
                        Math.sin(
                            progress *
                            Math.PI *
                            2.2
                        ) *
                        amplitude;


                    const secondaryWave =
                        Math.sin(
                            progress *
                            Math.PI *
                            4.4
                        ) *
                        amplitude *
                        0.28;


                    const y =
                        centerY +
                        wave +
                        secondaryWave;


                    graphPoints.push({

                        x: x,

                        baseY: y,

                        y: y,

                        valueOffset:
                            progress

                    });

                }

            }


            /* =================================================
               DRAW GRAPH
            ================================================= */

            function drawGraph(time) {

                if (
                    graphPoints.length <
                    2
                ) {

                    return;

                }


                /*
                   Very slow movement.
                */

                const movement =
                    reducedMotion.matches
                        ? 0
                        : Math.sin(
                            time * 0.00035
                        ) * 5;


                ctx.beginPath();


                graphPoints.forEach(
                    (point, index) => {

                        let y =
                            point.baseY +
                            movement;


                        /*
                           Cursor influence:
                           nearby section of graph
                           gently rises toward cursor.
                        */

                        if (
                            mouse.active &&
                            !reducedMotion.matches
                        ) {

                            const distance =
                                Math.abs(
                                    mouse.x -
                                    point.x
                                );


                            const influence =
                                Math.max(
                                    0,
                                    1 -
                                    distance /
                                    220
                                );


                            y -=
                                influence *
                                28 *
                                Math.max(
                                    0,
                                    1 -
                                    Math.abs(
                                        mouse.y -
                                        point.baseY
                                    ) /
                                    250
                                );

                        }


                        point.y = y;


                        if (index === 0) {

                            ctx.moveTo(
                                point.x,
                                point.y
                            );

                        } else {

                            const previous =
                                graphPoints[
                                    index - 1
                                ];


                            const controlX =
                                (
                                    previous.x +
                                    point.x
                                ) / 2;


                            ctx.quadraticCurveTo(

                                controlX,

                                previous.y,

                                point.x,

                                point.y

                            );

                        }

                    }
                );


                ctx.strokeStyle =
                    `rgba(
                        208,
                        167,
                        255,
                        ${GRAPH_OPACITY}
                    )`;


                ctx.lineWidth =
                    GRAPH_LINE_WIDTH;


                ctx.stroke();

            }


            /* =================================================
               DRAW GRAPH POINTS
            ================================================= */

            function drawGraphPoints() {

                graphPoints.forEach(
                    (point) => {

                        const distance =
                            Math.sqrt(

                                Math.pow(
                                    mouse.x -
                                    point.x,
                                    2
                                ) +

                                Math.pow(
                                    mouse.y -
                                    point.y,
                                    2
                                )

                            );


                        const isNearCursor =
                            mouse.active &&
                            distance < 90 &&
                            !reducedMotion.matches;


                        ctx.beginPath();


                        ctx.arc(

                            point.x,

                            point.y,

                            isNearCursor
                                ? 3
                                : 1.2,

                            0,

                            Math.PI * 2

                        );


                        ctx.fillStyle =
                            isNearCursor

                                ? "rgba(255,255,255,0.8)"

                                : "rgba(208,167,255,0.32)";


                        ctx.fill();

                    }
                );

            }


            /* =================================================
               CURSOR CONNECTION
            ================================================= */

            function drawCursorConnection() {

                if (
                    !mouse.active ||
                    reducedMotion.matches
                ) {

                    return;

                }


                let closestPoint = null;


                let closestDistance =
                    Infinity;


                graphPoints.forEach(
                    (point) => {

                        const distance =
                            Math.sqrt(

                                Math.pow(
                                    mouse.x -
                                    point.x,
                                    2
                                ) +

                                Math.pow(
                                    mouse.y -
                                    point.y,
                                    2
                                )

                            );


                        if (
                            distance <
                            closestDistance
                        ) {

                            closestDistance =
                                distance;

                            closestPoint =
                                point;

                        }

                    }
                );


                if (
                    !closestPoint ||
                    closestDistance > 180
                ) {

                    return;

                }


                /*
                   Smooth cursor-following point.
                */

                cursorPoint.x +=
                    (
                        mouse.x -
                        cursorPoint.x
                    ) * 0.08;


                cursorPoint.y +=
                    (
                        mouse.y -
                        cursorPoint.y
                    ) * 0.08;


                ctx.beginPath();


                ctx.moveTo(

                    closestPoint.x,

                    closestPoint.y

                );


                ctx.lineTo(

                    cursorPoint.x,

                    cursorPoint.y

                );


                ctx.strokeStyle =
                    "rgba(208,167,255,0.10)";


                ctx.lineWidth =
                    1;


                ctx.stroke();


                /*
                   Cursor point.
                */

                ctx.beginPath();


                ctx.arc(

                    cursorPoint.x,

                    cursorPoint.y,

                    3,

                    0,

                    Math.PI * 2

                );


                ctx.fillStyle =
                    "rgba(255,255,255,0.55)";


                ctx.fill();

            }


            /* =================================================
               ANIMATION LOOP
            ================================================= */

            function animate(time) {

                ctx.clearRect(

                    0,
                    0,

                    width,
                    height

                );


                drawGraph(
                    time
                );


                drawGraphPoints();


                drawCursorConnection();


                if (
                    !reducedMotion.matches
                ) {

                    animationFrame =
                        requestAnimationFrame(
                            animate
                        );

                }

            }


            /* =================================================
               MOUSE MOVE
            ================================================= */

            window.addEventListener(
                "mousemove",
                (event) => {

                    mouse.x =
                        event.clientX;


                    mouse.y =
                        event.clientY;


                    mouse.active =
                        true;

                },
                {
                    passive: true
                }
            );


            /* =================================================
               MOUSE LEAVE
            ================================================= */

            document.addEventListener(
                "mouseleave",
                () => {

                    mouse.active =
                        false;

                }
            );


            /* =================================================
               TOUCH DEVICES
            ================================================= */

            window.addEventListener(
                "touchstart",
                () => {

                    mouse.active =
                        false;

                },
                {
                    passive: true
                }
            );


            /* =================================================
               INITIALIZE
            ================================================= */

            resizeCanvas();


            if (
                reducedMotion.matches
            ) {

                canvas.style.display =
                    "none";

            } else {

                animationFrame =
                    requestAnimationFrame(
                        animate
                    );

            }


            /* =================================================
               RESIZE
            ================================================= */

            window.addEventListener(
                "resize",
                () => {

                    resizeCanvas();

                }
            );

        } else {

            canvas.style.display =
                "none";

        }

    }



    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(

        "%cAditya Kumar — Data Analyst Portfolio",

        "font-size:16px;font-weight:bold;color:#d0a7ff;"

    );


    console.log(
        "SQL • Python • Power BI • Excel"
    );

});