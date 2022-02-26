const path = require('path');
const glob = require('glob');
const fsExtra = require('fs-extra');

const srcFolderPath = path.resolve(__dirname, 'src');
const distFolderPath = path.resolve(__dirname, 'dist');

const allFilesInSrc = glob.sync('**/*.js', { cwd: srcFolderPath });

allFilesInSrc.forEach((file) => {
  fsExtra.outputFileSync(
    path.resolve(distFolderPath, file),
    fsExtra.readFileSync(path.resolve(srcFolderPath, file))
  );
});
