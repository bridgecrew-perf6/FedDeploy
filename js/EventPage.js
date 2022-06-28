const sections = document.querySelectorAll("section[id]");

const path = window.location.pathname;

var PageName = "";

if (path.search("Podcasts") === 1) {
    PageName = "Podcasts";
    console.log("Podcasts Page");
} else if (path.search("Team") === 1) {
    PageName = "Team";
    console.log("Team Page");
} else if (path.search("event") === 1) {
    PageName = "Events";
    console.log("Event Page");
} else {
    console.log("Home Page");
}

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;

        const sectionTop =
            current.getBoundingClientRect().top + window.pageYOffset - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (
                current.getAttribute("id") === "ContactUs" ||
                current.getAttribute("id") === "ContactUsMobo"
            ) {
                document.getElementById("ContactUsATag").innerHTML = `<li>
                <p class="active">Contact Us</p>
            </li>`;

                document.getElementById(
                    "ContactUsATagMobo"
                ).innerHTML = `<p class="active">Contact Us</p>`;

                document.getElementById(
                    "HomeActive"
                ).innerHTML = ` <p id="HomeActive">${PageName}</p>`;

                document.getElementById(
                    "HomeActiveMobo"
                ).innerHTML = ` <p id="HomeActive">${PageName}</p>`;
            } else if (
                current.getAttribute("id") !== "ContactUs" ||
                current.getAttribute("id") !== "ContactUsMobo"
            ) {
                document.getElementById(
                    "ContactUsATag"
                ).innerHTML = `<li>Contact Us</li>`;

                document.getElementById(
                    "ContactUsATagMobo"
                ).innerHTML = `<p>Contact Us</p>`;

                document.getElementById(
                    "HomeActive"
                ).innerHTML = ` <p class="active" id="HomeActive">${PageName}</p>`;

                document.getElementById(
                    "HomeActiveMobo"
                ).innerHTML = ` <p class="active" id="HomeActive">${PageName}</p>`;
            }
        } else {}
    });
}