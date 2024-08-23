class Logger {
    static defaultMessage = "Hello World";

    static info(message) {
        console.log(message);
    }

    static error(message) {
        console.log(message);
    }
}

module.exports = Logger;