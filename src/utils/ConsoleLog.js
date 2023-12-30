
export default function ConsoleLog(data, message = 'here is your data', color = 'red', bacgroud = 'red', ...extraData) {
    console.log('%c ' + message, "color:" + color, data, extraData)
}
