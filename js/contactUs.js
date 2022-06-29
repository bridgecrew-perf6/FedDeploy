const scriptURL2 =
    "https://script.google.com/macros/s/AKfycbyT7ts9XMe87ghfyvHj35WaThcqHZX_D1AKJ_2rRX6yM_qqZHwkBAGPHk_M7jMvx74/exec";

const form2 = document.forms["google-sheetContactUs"];

form2.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById(
        "ContactUsBtn"
    ).innerHTML = ` <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" id="svgSpinner">
<circle cx="50" cy="50" r="46"/>
</svg>`;

    fetch(scriptURL2, {
            method: "POST",
            body: new FormData(form2),
        })
        .then((response) => {
            console.log(document.getElementById("add"));

            document.getElementById("add").style.display = "flex";
            setTimeout(function() {
                document.getElementById("add").style.display = "none";
            }, 3000);
            document.getElementById(
                "ContactUsBtn"
            ).innerHTML = `<img src="./Img/Group 19.png" alt="" id="sendDoneImg">`;
        })
        .catch((error) => console.error("Error!", error.message));
});

const scriptURL3 =
    "https://script.google.com/macros/s/AKfycbyT7ts9XMe87ghfyvHj35WaThcqHZX_D1AKJ_2rRX6yM_qqZHwkBAGPHk_M7jMvx74/exec";

const form3 = document.forms["google-sheetContactUsMobo"];

form3.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById(
        "ContactUsBtnMobo"
    ).innerHTML = ` <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" id="svgSpinner">
<circle cx="50" cy="50" r="46"/>
</svg>`;

    fetch(scriptURL3, {
            method: "POST",
            body: new FormData(form3),
        })
        .then((response) => {
            document.getElementById("add").style.display = "flex";
            setTimeout(function() {
                document.getElementById("add").style.display = "none";
            }, 3000);
            document.getElementById(
                "ContactUsBtnMobo"
            ).innerHTML = `<img src="./Img/Group 19.png" alt="" id="sendDoneImg">`;
        })
        .catch((error) => console.error("Error!", error.message));
});