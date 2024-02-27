const fs = require('fs').promises;
const { read } = require('fs');
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    //console.log(rootDir);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        //console.log(file, stats.isDirectory());

        // excluding from the loop any file or directory that includes .git and node_modules
        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;

        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        // Doing this after the ifs above will return only the .html files
        if (!/\.html$/g.test(fileFullPath)) {
            continue;
        }

        console.log(fileFullPath);


    }
}

readdir('D:/Curso_JS_TS')
