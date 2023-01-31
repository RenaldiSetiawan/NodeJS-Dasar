import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Renal\n");
writer.write("di\n");
writer.write("Setiawan\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});