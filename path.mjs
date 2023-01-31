import path from "path";

const file = "C/Users/File/contoh.txt";

console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));

// Path merupakan standard library yang bisa kita gunakan untuk bekerja dengan lokasi file dan directory / folder
// https://nodejs.org/dist/latest-v16.x/docs/api/path.html 
