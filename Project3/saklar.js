function saklar() {
    let toogle1 = document.getElementById("default-toogle1");
    let toogle2 = document.getElementById("default-toogle2");
    let toogle3 = document.getElementById("default-toogle3");
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (toogle1.checked) {
            lampu1.src = "assets/images/lampo.png";
    }else {
            lampu1.src = "assets/images/lampoff.png";
    }
    if (toogle2.checked) {
        lampu2.src = "assets/images/lampo.png";
    }else {
        lampu2.src = "assets/images/lampoff.png";
    }
    if (toogle3.checked) {
        lampu3.src = "assets/images/lampo.png";
    }else {
        lampu3.src = "assets/images/lampoff.png";
    }
}