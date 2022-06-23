const scriptURL =
    "https://script.google.com/macros/s/AKfycbw6_jsnz-SSMM1ZEPU87OHSFUaeXuSKFXRA7PSqVX1XA8j61FMCPlxut7CC2KPdZuTMFg/exec";

const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById(
        "send"
    ).innerHTML = ` <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" id="svgSpinner">
    <circle cx="50" cy="50" r="46"/>
  </svg>`;
    fetch(scriptURL, {
            method: "POST",
            body: new FormData(form),
        })
        .then((response) => {
            document.getElementById("add").style.display = "flex";
            setTimeout(function() {
                document.getElementById("add").style.display = "none";
            }, 3000);
            // alert("Thanks for Contacting us..! We Will Contact You Soon...");
            document.getElementById(
                "send"
            ).innerHTML = `<img src="./Img/Group 19.png" alt="" id="sendDoneImg">`;
        })
        .catch((error) => console.error("Error!", error.message));
});