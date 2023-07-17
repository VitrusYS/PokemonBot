module.exports = {

    createLogString: function (date, message) {
        return `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]: ${message}`
    },

    logToConsole: function (date, message) {
        console.log(this.createLogString(date, message));
    }

}
