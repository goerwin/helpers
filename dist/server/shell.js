const util = require('util');
const { exec, spawn } = require('child_process');

const execPromise = util.promisify(exec);

// This will output to the console "Live"
// example spawnCommand('npm', cwd, ['install', 'react', 'url'])
function spawnCommand(command, cwd, args) {
    return new Promise((resolve, reject) => {
        const process = spawn(command, args, {
            stdio: 'inherit',
            ...(cwd && { cwd }),
        });

        process.on('exit', function (code) {
            code === 0 ? resolve(code) : reject(code);
        });
    });
}

function execCommand(command, cwd, attrs) {
    return execPromise(command, {
      ...(cwd && { cwd }),
        ...attrs,
    });
}

module.exports = {
    spawnCommand,
    execCommand,
};
