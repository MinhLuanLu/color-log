import clc from 'cli-color'

const log = {
    log: (value) => {
        console.info(clc.green(value));
    },
    info: (value) => {
        console.info(clc.cyan(value));
    },
    debug: (value) => {
        console.debug(clc.magenta(value)); 
    },
    warn: (value) => {
        console.warn(clc.yellow(value)); 
    },
    error: (value) => {
        console.error(clc.red(value));
    }
};

export default log;
