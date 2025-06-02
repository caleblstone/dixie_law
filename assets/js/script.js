document.addEventListener("DOMContentLoaded", function () {
    const squiggleBox = document.getElementById("squiggleBox");
    const navContainer = document.getElementById("nav");

    function positionSquiggleBox() {
        const activeNav = navContainer.querySelector("nav.active");
        if (!activeNav || !squiggleBox) {
            if (squiggleBox) squiggleBox.style.display = "none";
            return;
        }

        // Get bounding rects
        const navRect = navContainer.getBoundingClientRect();
        const navTextRect = activeNav.getBoundingClientRect();

        // Calculate position relative to #nav
        const left = navTextRect.left - navRect.left;
        const top = navTextRect.bottom - navRect.top + 4; // 4px below nav
        const width = navTextRect.width;

        // Apply styles to squiggleBox
        squiggleBox.style.position = "absolute";
        squiggleBox.style.left = `${left}px`;
        squiggleBox.style.top = `${top}px`;
        squiggleBox.style.width = `${width}px`;
        squiggleBox.style.height = "24px";
        squiggleBox.style.display = "block";
        squiggleBox.style.pointerEvents = "none";
        squiggleBox.style.zIndex = "1";
    }

    navContainer.style.position = "relative";
    positionSquiggleBox();

    if (document.fonts) {
        document.fonts.ready.then(positionSquiggleBox);
    }

    window.addEventListener("resize", positionSquiggleBox);
    window.addEventListener("orientationchange", positionSquiggleBox);
});




// document.addEventListener("DOMContentLoaded", function () {
//     const squiggle = document.getElementById("squiggle");
//     const navContainer = document.getElementById("nav");

//     function positionSquiggle() {
//         const activeNav = navContainer.querySelector("nav.active");
//         if (!activeNav || !squiggle) {
//             squiggle.style.display = "none";
//             return;
//         }
//         const navRect = activeNav.getBoundingClientRect();
//         const containerRect = navContainer.getBoundingClientRect();
//         const left = navRect.left - containerRect.left;
//         const width = navRect.width;
//         const top = navRect.bottom - containerRect.top + 4;
//         squiggle.style.position = "absolute";
//         squiggle.style.left = `${left}px`;
//         squiggle.style.top = `${top}px`;
//         squiggle.style.width = `${width}px`;
//         squiggle.style.height = "16px";
//         squiggle.style.display = "block";
//         squiggle.style.pointerEvents = "none";
//         squiggle.style.zIndex = "1";
//     }

//     navContainer.style.position = "relative";
//     positionSquiggle();

//     if (document.fonts) {
//         document.fonts.ready.then(positionSquiggle);
//     }

//     window.addEventListener("resize", positionSquiggle);
//     window.addEventListener("orientationchange", positionSquiggle);
// });



// function positionSquiggle() {
//   const squiggle = document.getElementById("squiggle");
//   const nav = document.getElementById("nav");
//   const activeNav = document.querySelector("#nav nav.active");

//   // Hide squiggle on home/baseurl
//   if (window.location.pathname === "/" || window.location.pathname === (window.BASEURL || "")) {
//     if (squiggle) squiggle.style.display = "none";
//     return;
//   }

//   if (nav) {
//     nav.style.position = "relative";
//   }

//   if (squiggle && activeNav) {
//     const navRect = nav.getBoundingClientRect();
//     const navTextRect = activeNav.getBoundingClientRect();

//     // Calculate position relative to #nav
//     const left = navTextRect.left - navRect.left;
//     const top = navTextRect.bottom - navRect.top;

//     squiggle.style.position = "absolute";
//     squiggle.style.left = left + "px";
//     squiggle.style.top = top + "px";
//     squiggle.style.width = navTextRect.width + "px";
//     squiggle.style.pointerEvents = "none";
//     squiggle.style.display = "block";
//   }
// }

// document.addEventListener("DOMContentLoaded", positionSquiggle);
// window.addEventListener("resize", positionSquiggle);