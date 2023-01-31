const buffer = Buffer.from("Renal Stwn");

console.info(buffer); // seperti byte arr
console.info(buffer.toString()); // dan dikonversi jadi string

buffer.reverse();  // reverse di balik urutannya
console.info(buffer.toString());