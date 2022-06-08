let sl = false,
    sm1 = false,
    sm2 = false;

function SaveLeader() {
    var leaderfirstName = document.getElementById("leaderfirstName").value;
    var leaderLastName = document.getElementById("leaderLastName").value;
    var leaderMobileNumber = document.getElementById("leaderMobileNumber").value;
    var leaderCollegeEmail = document.getElementById("leaderCollegeEmail").value;

    if (
        leaderfirstName !== "" &&
        leaderLastName !== "" &&
        leaderMobileNumber !== "" &&
        leaderMobileNumber.length === 10 &&
        leaderCollegeEmail !== "" &&
        document.getElementById("leaderCollegeEmail").reportValidity()
    ) {
        sl = false;
        var leader = `1. ${leaderfirstName} ${leaderLastName}`;

        var elems = document.getElementsByClassName("Teamdetails");
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = "block";
        }

        document.getElementById("leaderDetails").innerHTML = leader;
        document.getElementById("leaderDetails1").innerHTML = leader;
        document.getElementById("leaderDetails2").innerHTML = leader;
        document.getElementById("leaderNamePrint").innerHTML = leader;
        document.getElementById("leaderNamePrint1").innerHTML = leader;
        document.getElementById("leaderNamePrint2").innerHTML = leader;

        document.getElementById("continuing1").style.display = "none";
    } else if (
        leaderfirstName === "" ||
        leaderLastName === "" ||
        leaderMobileNumber === "" ||
        leaderMobileNumber.length !== 10 ||
        !document.getElementById("leaderCollegeEmail").reportValidity()
    ) {
        document.getElementById("continuing1").style.display = "block";
        if (document.getElementById("leaderMobileNumber").value.length !== 10) {
            document.getElementById("continuing1").innerHTML = "Enter a valid Number";
            return;
        }
        document.getElementById("continuing1").innerHTML =
            "Enter the Details before continuing";
    }

    if (document.getElementById("leaderDetails").innerHTML !== "") {
        sl = true;
    }
}

function Save() {
    var leaderfirstName = document.getElementById("firstNameMember1").value;
    var leaderLastName = document.getElementById("LastNameMember1").value;
    var leaderMobileNumber = document.getElementById("MobileNumberCard2").value;
    var leaderCollegeEmail = document.getElementById("CollegeEmailCard2").value;

    if (
        leaderfirstName !== "" &&
        leaderLastName !== "" &&
        leaderMobileNumber !== "" &&
        leaderMobileNumber.length === 10 &&
        leaderCollegeEmail !== "" &&
        document.getElementById("CollegeEmailCard2").reportValidity() &&
        document.getElementById("leaderCollegeEmail").value !==
        document.getElementById("CollegeEmailCard2").value
    ) {
        sm1 = false;
        var leader = `2. ${leaderfirstName} ${leaderLastName}`;

        document.getElementById("details1").innerHTML = leader;
        document.getElementById("details2").innerHTML = leader;
        document.getElementById("teamMember1Print").innerHTML = leader;
        document.getElementById("teamMember1Print1").innerHTML = leader;
        document.getElementById("teamMember1Print2").innerHTML = leader;

        document.getElementById("continuing2").style.display = "none";
    } else if (
        leaderfirstName === "" ||
        leaderLastName === "" ||
        leaderMobileNumber === "" ||
        leaderMobileNumber.length !== 10 ||
        !document.getElementById("CollegeEmailCard2").reportValidity() ||
        document.getElementById("leaderCollegeEmail").value ===
        document.getElementById("CollegeEmailCard2").value
    ) {
        document.getElementById("continuing2").style.display = "block";
        if (document.getElementById("MobileNumberCard2").value.length !== 10) {
            document.getElementById("continuing2").innerHTML = "Enter a valid Number";
            return;
        }
        document.getElementById("continuing2").innerHTML =
            "Enter the Details before continuing";
        if (
            document.getElementById("leaderCollegeEmail").value ===
            document.getElementById("CollegeEmailCard2").value
        ) {
            document.getElementById("continuing2").innerHTML =
                "Every Member Should be Unique";
        }
    }

    if (document.getElementById("details1").innerHTML !== "") {
        sm1 = true;
    }
}

function Save2() {
    var leaderfirstName = document.getElementById("firstNameMember2").value;
    var leaderLastName = document.getElementById("LastNameMember2").value;
    var leaderMobileNumber = document.getElementById("MobileNumberLast").value;
    var leaderCollegeEmail = document.getElementById("EmailLast").value;

    if (
        leaderfirstName !== "" &&
        leaderLastName !== "" &&
        leaderMobileNumber !== "" &&
        leaderMobileNumber.length === 10 &&
        leaderCollegeEmail !== "" &&
        document.getElementById("EmailLast").reportValidity() &&
        document.getElementById("leaderCollegeEmail").value !==
        document.getElementById("EmailLast").value &&
        document.getElementById("CollegeEmailCard2").value !==
        document.getElementById("EmailLast").value
    ) {
        var leader = `3. ${leaderfirstName} ${leaderLastName}`;

        document.getElementById("detailsMember2").innerHTML = leader;
        document.getElementById("teamMember2Print").innerHTML = leader;
        document.getElementById("teamMember2Print1").innerHTML = leader;
        document.getElementById("teamMember2Print2").innerHTML = leader;

        // print all details
        TeamName = document.getElementById("TeamName").value;
        document.getElementById("teamNamePrint").innerHTML = TeamName;
        document.getElementById("teamNamePrint1").innerHTML = TeamName;
        document.getElementById("teamNamePrint2").innerHTML = TeamName;

        document.getElementById("continuing3").style.display = "none";
    } else if (
        leaderfirstName === "" ||
        leaderLastName === "" ||
        leaderMobileNumber === "" ||
        leaderMobileNumber.length !== 10 ||
        !document.getElementById("EmailLast").reportValidity() ||
        document.getElementById("leaderCollegeEmail").value ===
        document.getElementById("EmailLast").value ||
        document.getElementById("CollegeEmailCard2").value ===
        document.getElementById("EmailLast").value
    ) {
        document.getElementById("continuing3").style.display = "block";
        if (document.getElementById("MobileNumberLast").value.length !== 10) {
            document.getElementById("continuing3").innerHTML = "Enter a valid Number";
            return;
        }
        document.getElementById("continuing3").innerHTML =
            "Enter the Details before continuing";

        if (
            document.getElementById("leaderCollegeEmail").value ===
            document.getElementById("EmailLast").value ||
            document.getElementById("CollegeEmailCard2").value ===
            document.getElementById("EmailLast").value
        ) {
            document.getElementById("continuing3").innerHTML =
                "Every Member Should be Unique";
        }
    }
}

function addMem1() {
    if (sl == false) {
        document.getElementById("continuing1").style.display = "block";
        if (
            document.getElementById("leaderfirstName").value == "" ||
            document.getElementById("leaderLastName").value == "" ||
            document.getElementById("leaderMobileNumber").value == "" ||
            document.getElementById("leaderMobileNumber").value.length !== 10 ||
            document.getElementById("leaderCollegeEmail").value == "" ||
            !document.getElementById("leaderCollegeEmail").reportValidity()
        ) {
            if (document.getElementById("leaderMobileNumber").value.length !== 10) {
                document.getElementById("continuing1").innerHTML =
                    "Enter a valid Number";
                return;
            }
            document.getElementById("continuing1").innerHTML =
                "Enter the Details before continuing";
        } else {
            document.getElementById("continuing1").innerHTML =
                "Save the Details before continuing";
        }
        return;
    } else {
        document.getElementById("continuing1").style.display = "none";
        currentStep++;
        showCurrentStep();
        return;
    }
}

function addMem2() {
    if (sm1 == false) {
        document.getElementById("continuing2").style.display = "block";
        if (
            document.getElementById("firstNameMember1").value == "" ||
            document.getElementById("LastNameMember1").value == "" ||
            document.getElementById("MobileNumberCard2").value == "" ||
            document.getElementById("MobileNumberCard2").value.length !== 10 ||
            document.getElementById("CollegeEmailCard2").value == "" ||
            !document.getElementById("CollegeEmailCard2").reportValidity()
        ) {
            if (document.getElementById("MobileNumberCard2").value.length !== 10) {
                document.getElementById("continuing2").innerHTML =
                    "Enter a valid Number";
                return;
            }
            document.getElementById("continuing2").innerHTML =
                "Enter the Details before continuing";
        } else {
            document.getElementById("continuing2").innerHTML =
                "Save the Details before continuing";
        }
        return;
    } else {
        document.getElementById("continuing2").style.display = "none";
        currentStep++;
        showCurrentStep();
        return;
    }
}

document.getElementById("KIIT").addEventListener("click", function(e) {
    removeAlertDiv2();
    if (document.getElementById("KIIT").checked) {
        document.getElementById("OtherCollageNameCard2").value = "";
    }
});

document
    .getElementById("OtherCollageNameCard2")
    .addEventListener("click", function(e) {
        if (document.getElementById("KIIT").checked) {
            document.getElementById("KIIT").checked = false;
        }
    });

document
    .getElementById("OtherCollageNameCard2")
    .addEventListener("change", function(e) {
        removeAlertDiv2();
    });

function removeAlertDiv2() {
    if (
        document.getElementById("KIIT").checked ||
        document.getElementById("OtherCollageNameCard2").value !== ""
    ) {
        document.getElementById("Alert").style.display = "none";
    }
}

document
    .getElementById("leaderfirstName")
    .addEventListener("change", function(e) {
        if (document.getElementById("leaderfirstName").value !== "") {
            offAlert("continuing1");
        }
    });
document
    .getElementById("leaderLastName")
    .addEventListener("change", function(e) {
        if (document.getElementById("leaderLastName").value !== "") {
            offAlert("continuing1");
        }
    });

document
    .getElementById("leaderMobileNumber")
    .addEventListener("change", function(e) {
        if (document.getElementById("leaderMobileNumber").value !== "") {
            offAlert("continuing1");
        }
    });
document
    .getElementById("leaderCollegeEmail")
    .addEventListener("change", function(e) {
        if (document.getElementById("leaderCollegeEmail").value !== "") {
            offAlert("continuing1");
        }
    });

document
    .getElementById("firstNameMember1")
    .addEventListener("change", function(e) {
        if (document.getElementById("firstNameMember1").value !== "") {
            offAlert("continuing2");
        }
    });
document
    .getElementById("LastNameMember1")
    .addEventListener("change", function(e) {
        if (document.getElementById("LastNameMember1").value !== "") {
            offAlert("continuing2");
        }
    });

document
    .getElementById("MobileNumberCard2")
    .addEventListener("change", function(e) {
        if (document.getElementById("MobileNumberCard2").value !== "") {
            offAlert("continuing2");
        }
    });

document
    .getElementById("CollegeEmailCard2")
    .addEventListener("change", function(e) {
        if (document.getElementById("CollegeEmailCard2").value !== "") {
            offAlert("continuing2");
        }
    });

document
    .getElementById("MobileNumberLast")
    .addEventListener("change", function(e) {
        if (document.getElementById("MobileNumberLast").value !== "") {
            offAlert("continuing3");
        }
    });

document.getElementById("EmailLast").addEventListener("change", function(e) {
    if (document.getElementById("EmailLast").value !== "") {
        offAlert("continuing3");
    }
});

function offAlert(idTag) {
    document.getElementById(idTag).style.display = "none";
}

document
    .getElementById("ContactNumberCard1")
    .addEventListener("change", function(e) {
        document.getElementById("EnterValidNumber").style.display = "none";
    });