const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//fungsi perhitungan
function hitung(operasi, angka1, angka2) {
  if (operasi === '+') {
    return angka1 + angka2;
  } else if (operasi === '-') {
    return angka1 - angka2;
  } else {
    return "Operasi tidak valid!";
  }
}

// Meminta input dari pengguna
rl.question('Input angka pertama: ', (angka1) => {
  rl.question('Input angka kedua: ', (angka2) => {
    rl.question('Pilih operasi (+ untuk penjumlahan, - untuk pengurangan): ', (operasi) => {
      // Konversi input ke number
      angka1 = parseFloat(angka1);
      angka2 = parseFloat(angka2);

      // Memastikan input angka valid
      if (isNaN(angka1) || isNaN(angka2)) {
        console.log("Input angka tidak valid!");
      } else {
        // Memanggil fungsi hitung dan menampilkan hasil
        const hasil = hitung(operasi, angka1, angka2);
        console.log(`Jumlah perhitungan : ${hasil}`);
      }

      // Menutup interface readline
      rl.close();
    });
  });
});