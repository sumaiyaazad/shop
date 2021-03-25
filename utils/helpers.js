const fs = require('fs');
const path = require('path');

const CustomError = require('./error');

exports.moveFile = async (file, type = '') => {
    try {
        const directoryPath = `uploads${type ? '/' + type : ''}`;
        const directoryPathRes = path.resolve('./' + directoryPath);
        if (!fs.existsSync(directoryPathRes)) {
            fs.mkdirSync(directoryPathRes);
        }
        const fileName = file.originalname.split('.');
        const newFileName = `${file.filename}.${fileName[1] || 'jpg'}`;
        const newFilePath = `${directoryPathRes}/${newFileName}`;
        const filePath = file.path;
        await fs.renameSync(filePath, `${newFilePath}`);
        console.log("Successfully moved the file!");
        return `${directoryPath}/${newFileName}`;
    } catch (e) {
        throw new CustomError(400, e.message);
    }
}