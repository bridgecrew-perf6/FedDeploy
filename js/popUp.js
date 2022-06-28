let popLet = 1;

function pop() {
    popLet++;
    if (popLet % 2 == 0) {
        document.getElementById("popmDiv").style.display = "flex";
        document.getElementsByClassName("MoboFooter")[0].style.display = "none";
        document.body.style.overflow = "hidden";
    } else {
        document.getElementById("popmDiv").style.display = "none";
        document.getElementsByClassName("MoboFooter")[0].style.display = "block";
        document.body.style.overflow = "auto";
    }
}

const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
let currentStep = formSteps.findIndex((step) => {
    return step.classList.contains("active");
});

if (currentStep < 0) {
    currentStep = 0;
    showCurrentStep();
}

multiStepForm.addEventListener("click", (e) => {
    let incrementor;
    if (e.target.matches("[data-next]")) {
        incrementor = 1;
    } else if (e.target.matches("[data-previous]")) {
        incrementor = -1;
    }

    if (incrementor == null) return;

    const inputs = [...formSteps[currentStep].querySelectorAll("input")];
    const allValid = inputs.every((input) => input.reportValidity());
    if (allValid) {
        if (
            currentStep == 0 &&
            document.getElementById("ContactNumberCard1").value.length !== 10
        ) {
            document.getElementById("EnterValidNumber").style.display = "block";
            return;
        }
        if (
            currentStep == 1 &&
            !document.getElementById("KIIT").checked &&
            document.getElementById("OtherCollageNameCard2").value == ""
        ) {
            document.getElementById("Alert").style.display = "block";
            return;
        }

        currentStep += incrementor;
        showCurrentStep();
    }
});

formSteps.forEach((step) => {
    step.addEventListener("animationend", (e) => {
        formSteps[currentStep].classList.remove("hide");
        e.target.classList.toggle("hide", !e.target.classList.contains("active"));
    });
});

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });
}

function Immateamplayer() {
    currentStep = 6;
    showCurrentStep();
}

function GoingSolo() {
    currentStep = 3;
    showCurrentStep();
}

function PreviousImmateamplayer() {
    currentStep = 3;
    showCurrentStep();
}

function AttendedFED(e) {
    if (e == "Yes") {
        currentStep++;
    } else {
        currentStep = currentStep + 2;
    }
    showCurrentStep();
}

function PreviousAttendedFED() {
    currentStep = currentStep - 2;
    showCurrentStep();
}

function NextBTN() {
    if (
        document.getElementById("firstNameMember1").value === "" ||
        document.getElementById("LastNameMember1").value === "" ||
        document.getElementById("MobileNumberCard2").value === "" ||
        document.getElementById("CollegeEmailCard2").value === ""
    ) {
        const inputs = [...formSteps[currentStep].querySelectorAll("input")];
        const allValid = inputs.every((input) => input.reportValidity());
        if (allValid) {
            return;
        }
        document.getElementById("continuing2").style.display = "block";
        document.getElementById("continuing2").innerHTML =
            "Save the Details before continuing";
    } else {
        if (document.getElementById("details1").innerHTML !== "") {
            const inputs = [...formSteps[currentStep].querySelectorAll("input")];
            const allValid = inputs.every((input) => input.reportValidity());
            if (allValid) {
                currentStep = currentStep + 2;
                showCurrentStep();
            }
        } else {
            document.getElementById("continuing2").style.display = "block";
            document.getElementById("continuing2").innerHTML =
                "Save the Details before continuing";
        }
    }
}

function NextImmateam() {
    currentStep++;
    showCurrentStep();
}

function Submit() {
    const inputs = [...formSteps[currentStep].querySelectorAll("input")];
    const allValid = inputs.every((input) => input.reportValidity());
    if (allValid) {
        currentStep = 12;
        showCurrentStep();
    }
}