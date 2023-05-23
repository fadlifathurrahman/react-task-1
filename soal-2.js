const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const gabunganHewan = () => {
  const hewan = [...hewanBuas, ...hewanJinak];
  return hewan;
};

const makananHewanJinak = () => {
  const makananKesukaan = ["ikan", "wortel", "jagung"];
  const makananKesukaanHewanJinak = hewanJinak.map(
    (number, i) => number + " makanan kesukaannya " + makananKesukaan[i]
  );
  return makananKesukaanHewanJinak;
};

setTimeout(() => {
    console.log(gabunganHewan());
}, 5000);
console.log(makananHewanJinak());