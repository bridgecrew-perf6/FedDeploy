const sections = document.querySelectorAll("section[id]");

let path = window.location.pathname;

console.log(typeof path);

// if (window.location.href.indexOf("event") != -1) {
//     console.log("Events Page");
// } else if (window.location.href.indexOf("team") != -1) {
//     console.log("Team Page");
// } else if (window.location.href.indexOf("Podcasts") != -1) {
//     console.log("Podcasts Page");
// } else {
//     console.log("Home");
// }

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;

        const sectionTop =
            current.getBoundingClientRect().top + window.pageYOffset - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (current.getAttribute("id") === "KnowUs") {
                document.getElementById("KnowUsATag").innerHTML = ` <li>
                <p class="active">About Us</p>
            </li>`;

                document.getElementById(
                    "KnowUsMobo"
                ).innerHTML = `<p class="active">About Us</p>`;

                document.getElementById(
                    "HomeActive"
                ).innerHTML = ` <p id="HomeActive">Home</p>`;

                document.getElementById(
                    "HomeActiveMobo"
                ).innerHTML = ` <p id="HomeActive">Home</p>`;
            } else if (
                current.getAttribute("id") === "ContactUs" ||
                current.getAttribute("id") === "ContactUsMobo"
            ) {
                // console.log("Contact US");

                document.getElementById("ContactUsATag").innerHTML = `<li>
                <p class="active">Contact Us</p>
            </li>`;

                document.getElementById(
                    "ContactUsATagMobo"
                ).innerHTML = `<p class="active">Contact Us</p>`;

                document.getElementById(
                    "HomeActive"
                ).innerHTML = ` <p id="HomeActive">Home</p>`;

                document.getElementById(
                    "HomeActiveMobo"
                ).innerHTML = ` <p id="HomeActive">Home</p>`;
            } else if (
                current.getAttribute("id") !== "KnowUs" ||
                current.getAttribute("id") !== "ContactUs" ||
                current.getAttribute("id") !== "ContactUsMobo"
            ) {
                document.getElementById("KnowUsATag").innerHTML = `<li>About Us</li>`;

                document.getElementById("KnowUsMobo").innerHTML = `<p>About Us</p>`;

                document.getElementById(
                    "ContactUsATag"
                ).innerHTML = `<li>Contact Us</li>`;

                document.getElementById(
                    "ContactUsATagMobo"
                ).innerHTML = `<p>Contact Us</p>`;

                document.getElementById(
                    "HomeActive"
                ).innerHTML = ` <p class="active" id="HomeActive">Home</p>`;

                document.getElementById(
                    "HomeActiveMobo"
                ).innerHTML = ` <p class="active" id="HomeActive">Home</p>`;
            }
        } else {}
    });
}