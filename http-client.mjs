import https from "https";

const endpoint = "https://eou4x2dcy4aihwt.m.pipedream.net";
const request = https.request(endpoint, {
    method: "GET",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "Renal",
    lastName: "Stwn",
})

request.write(body);
request.end();