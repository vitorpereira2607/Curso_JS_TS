const fs = require('fs').promises;

/*
flag: 'w' will delete the information inside of the file and add the new one
flag: 'a' increments the informations
*/

module.exports = (dir, data) => {
    fs.writeFile(dir, data, { flag: 'w', encoding: 'utf8'})
}



 