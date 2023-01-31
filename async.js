function samplePromise() {
    return Promise.resolve("Hello");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run()