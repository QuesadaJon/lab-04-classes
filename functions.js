//function to remove all the contents of an input except for (), {}, and [].

const removeContents = (string) => {
    return `${string}`.replace(/[^\[\{\(\)\}\]\.]+/g, "");
};

// \[\{\(\)\}\]

const functionString1 = function add(a, b) {
    return (a + b);
}

console.log(removeContents(functionString1));

module.exports = {
    removeContents
}