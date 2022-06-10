const scriptURL =
    "https://script.google.com/macros/s/AKfycbw6_jsnz-SSMM1ZEPU87OHSFUaeXuSKFXRA7PSqVX1XA8j61FMCPlxut7CC2KPdZuTMFg/exec";

const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, {
            method: "POST",
            body: new FormData(form),
        })
        .then((response) =>
            alert("Thanks for Contacting us..! We Will Contact You Soon...")
        )
        .catch((error) => console.error("Error!", error.message));
});