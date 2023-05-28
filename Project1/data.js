const nama = "aldi rizki";
let usia = 27;

const biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        generasi = "anda remaja";
    } 
    else if (usia > 18 && usia < 30) {
        generasi = "anda dewasa";
    } 
    else if (usia >= 30) {
        generasi = "anda orang tua";
    }
    else if (usia > 5  && usia < 10) {
        generasi = "anda anak anak";
    }
    else {
        // STATEMENT TIDAK TERPENUHI
        generasi = "anda balita";
    }

    return biodata.innerHTML = generasi;

};

console.log(nama);
console.log(usia);

generateBiodata();