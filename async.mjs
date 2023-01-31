function samplePromise() {
    return Promise.resolve("Hello");
}


const name = await samplePromise();
console.info(name);
