import fs from "fs/promises";

const buffer = await fs.readFile("file-system.mjs"); // isi File dari file-system.mjs

console.info(buffer.toString());

await fs.writeFile("temp.txt", "Hello NodeJS"); // membuat file baru .txt yang isi Hello NodeJS

// File System merupakan standard library yang bisa digunakan untuk memanipulasi file system