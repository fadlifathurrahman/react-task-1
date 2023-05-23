const dataDiri = {
    nama: "Muhammad Fadli Fathurrahman",
    nim: "02032111033",
    email: "fadlifathurrahmanm@gmail.com",
};

let { nama, nim, email } = dataDiri;

console.log(nama);
console.log(nim);
console.log(email);

let teman1 = ["Riyanda", "Agus"];
let teman2 = ["Kurniawan", "Anggi"];
let teman3 = ["Dimas", "Wahyu"];

const teman = [...teman1, ...teman2, ...teman3];
console.log(teman);