function createLogger(logName) {
    return function(logText) {
        console.log(logName + logText)
    }
}


const errorLog = createLogger('ERROR: ');
errorLog('Пофикси меня!')// ERROR: Пофикси меня!
const debugLog = createLogger('DEBUG: ');
debugLog('Важная отладочная информация!')// DEBUG: Важная отладочная информация!
