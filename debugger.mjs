function sayHello(name) {
    debugger;
    return `Hello ${name}`;
}

const name = "Bro";
console.info(sayHello(name));

// Agar jalan dalam mode debug, Jalankan perintah: node inspect namafile.js
/* Perintah yang bisa kita gunakan dalam melakukan debugging
    cont, c: Continue execution
    next, n: Step next
    step, s: Step in
    out, o: Step out
    pause: Pause running code
*/
// watch(name) untuk lihat isi variable name
// .exit keluar terminal debugger