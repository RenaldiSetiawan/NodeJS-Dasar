
const buffer = Buffer.from("Renaldi Stwn", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("UmVuYWxkaSBTdHdu", "base64");
console.info(bufferBase64.toString("utf8"));

//  Buffer juga bisa digunakan untuk melakukan encoding dari satu encoding ke encoding yang lain

