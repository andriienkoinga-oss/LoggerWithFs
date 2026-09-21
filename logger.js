const fs = require('fs')


function logMessage(message) {
    fs.appendFile('log.txt', message + '\n', 'utf8', (err) => {
        if(err){
            console.error('Ошибка записи:', err.message);
            return;
        }

        console.log(`Сообщение записано в файл: ${message}`);
    })
}

module.exports = {logMessage}
