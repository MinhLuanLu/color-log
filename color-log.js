import clc from 'cli-color';

const formatValue = (key, value) => {

    const whiteEqual = clc.white('=');
    const whiteColon = clc.white(':');
    if (key === 'data') {
        // Format the "data" object in white
        return `${clc.white(key)} ${whiteEqual} ${JSON.stringify(value)}`;
    } else if (typeof value === 'object') {
        // Format other objects normally
        return `${clc.white(key)}${whiteColon} ${JSON.stringify(value)}`;
    }
    return `${clc.white(key)}${whiteColon} ${value}`;
};

const log = {
    log: (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            const formattedMessage = Object.entries(obj)
                .map(([key, value]) => formatValue(key, value))
                .join(', ');

            console.log(clc.green(`[LOG] ${formattedMessage}`));
        } else {
            console.log(clc.green(`[LOG] ${obj}`));
        }
    },

    info: (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            const formattedMessage = Object.entries(obj)
                .map(([key, value]) => formatValue(key, value))
                .join(', ');

            console.log(clc.cyan(`[INFO] ${formattedMessage}`));
        } else {
            console.log(clc.cyan(`[INFO] ${obj}`));
        }
    },

    debug: (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            const formattedMessage = Object.entries(obj)
                .map(([key, value]) => formatValue(key, value))
                .join(', ');

            console.log(clc.magenta(`[DEBUG] ${formattedMessage}`));
        } else {
            console.log(clc.magenta(`[DEBUG] ${obj}`));
        }
    },

    warn: (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            const formattedMessage = Object.entries(obj)
                .map(([key, value]) => formatValue(key, value))
                .join(', ');

            console.log(clc.yellow(`[WARN] ${formattedMessage}`));
        } else {
            console.log(clc.yellow(`[WARN] ${obj}`));
        }
    },

    err: (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            const formattedMessage = Object.entries(obj)
                .map(([key, value]) => formatValue(key, value))
                .join(', ');

            console.log(clc.red(`[ERROR] ${formattedMessage}`));
        } else {
            console.log(clc.red(`[ERROR] ${obj}`));
        }
    }
};

export default log;
