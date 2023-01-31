import dns from "dns/promises";

const address = await dns.lookup("www.google.com");

console.info(address)
console.info(address.address);
console.info(address.family);

// DNS merupakan standard library yang bisa digunakan untuk bekerja dengan DNS (domain name server)
// https://nodejs.org/dist/latest-v16.x/docs/api/dns.html 