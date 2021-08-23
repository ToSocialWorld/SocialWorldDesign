module.exports = {
    mode: "development",
    entry: {
        find: "./src/js/find.js",
        contact: "./src/js/contact.js",
        register: "./src/js/register.js"
    },
    output: {
        filename: "[name].js"
    }
};