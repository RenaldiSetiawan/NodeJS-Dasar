import {URL} from "url";

const pzn = new URL("https://nodejs.org/en/download/");

pzn.host = "www.nodeJs.com"; // ubah host url
pzn.searchParams.append("status", "premium"); // ubah status params

console.info(pzn.toString());
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);