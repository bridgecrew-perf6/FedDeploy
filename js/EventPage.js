const sections = document.querySelectorAll("section[id]");

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
                ).innerHTML = ` <p id="HomeActive">Events</p>`;

                document.getElementById(
                    "HomeActiveMobo"
                ).innerHTML = ` <p id="HomeActive">Events</p>`;
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
                ).innerHTML = ` <p class="active" id="HomeActive">Home</p>`;

                document.getElementById(
                    "HomeActiveMobo"
                ).innerHTML = ` <p class="active" id="HomeActive">Home</p>`;
            }
        } else {}
    });
}