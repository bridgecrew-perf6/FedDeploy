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
            if (current.getAttribute("id") === "KnowUs") {
                document.getElementById("KnowUsATag").innerHTML = ` <li>
                <p class="active">About Us</p>
            </li>`;
                // document.getElementById("KnowUsMobo").innerHTML = ``;
            } else if (current.getAttribute("id") !== "KnowUs") {
                document.getElementById("KnowUsATag").innerHTML = `<li>About Us</li>`;
            }
        } else {}
    });
}