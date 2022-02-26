import util from 'util';
import { exec, spawn } from 'child_process';

const execPromise = util.promisify(exec);

// This will output to the console "Live"
// example spawnCommand('npm', cwd, ['install', 'react', 'url'])
export function spawnCommand(command: string, cwd?: string, args?: any) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, {
      stdio: 'inherit',
      ...(cwd && { cwd }),
    });

    process.on('exit', function (code: number) {
      code === 0 ? resolve(code) : reject(code);
    });
  });
}

export function execCommand(command: string, cwd?: string, attrs?: any) {
  return execPromise(command, {
    ...(cwd && { cwd }),
    ...attrs,
  });
}
