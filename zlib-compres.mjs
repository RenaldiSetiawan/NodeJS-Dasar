import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib-compres.mjs");
const result = zlib.gzipSync(source);

fs.writeFileSync("zlib-compress.mjs.txt", result);

// Zlib adalah standard library yang digunakan untuk melakukan kompresi menggunakan Gzip
