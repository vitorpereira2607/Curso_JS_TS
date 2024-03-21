const fs = require('fs').promises;
const path = require('path');

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files)) // returns the file in the current file location
//     .catch(e => console.log(e)) 

async function readdir(rootdir) {
    const dir = rootdir || path.resolve(__dirname);
    const files = await fs.readdir(dir);

    return walk(files, dir);
}

async function walk(files, rootdir) {
    let filteredFiles = [];

    for (let file of files) {
        const fileFullPath = path.resolve(rootdir, file);
        const stats = await fs.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue;
        if (/\.node_modules/g.test(fileFullPath)) continue;

        if (stats.isDirectory()) {
            const subFiles = await readdir(fileFullPath); // await the result of recursive call
            filteredFiles = filteredFiles.concat(subFiles); // merge the results
        } else {
            if (/\.css$/g.test(fileFullPath) || /\.html$/g.test(fileFullPath)) {
                filteredFiles.push(fileFullPath);
            }
        }
    }

    return filteredFiles;
}

// Call readdir with the desired root directory
readdir('D:/Curso_JS_TS')
    .then(filteredFiles => console.log(filteredFiles))
    .catch(error => console.error(error));
