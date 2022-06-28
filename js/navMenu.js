const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach((current) => {
        console.log(current);

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
                current.getAttribute("id") !== "ContactUs" ||
                current.getAttribute("id") !== "ContactUsMobo"
            ) {} else if (current.getAttribute("id") !== "KnowUs") {
                document.getElementById("KnowUsATag").innerHTML = `<li>About Us</li>`;

                document.getElementById("KnowUsMobo").innerHTML = `<p>About Us</p>`;

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