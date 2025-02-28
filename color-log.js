import clc from 'cli-color'

const log = {
    log: (value) => {
        console.info(clc.green(`[LOG] ${value}`));
    },
    info: (value) => {
        console.info(clc.cyan(`[INFO] ${value}`));
    },
    debug: (value) => {
        console.debug(clc.magenta(`[DEBUG] ${value}`)); 
    },
    warn: (value) => {
        console.warn(clc.yellow(`[WARN] ${value}`)); 
    },
    error: (value) => {
        console.error(clc.red(`[ERROR] ${value}`));
    }
};

export default log;
