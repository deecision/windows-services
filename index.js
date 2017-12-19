const Service = require('node-windows').Service;
const Logger = require('node-windows').EventLogger;

const logger = new Logger('[Deecision] Services installer');
const options = {};

let commandName = null;

process.argv.forEach((val, index) => {
    if (index < 2) {
        return;
    }

    if (val.match(/^\-\-/)) {
        let [option, value] = val.split('=');

        options[option.substring(2)] = value.trim();
    } else {
        if (commandName) {
            throw new Error(`A command name '${commandName}' is already defined and conflict with '${val}'`);
        }
        commandName = val;
    }
});

const commands = {
    help() {
        logger.info('Commands available "--install=ABSOLUTE_PATH_TO_YOUR_EXE_FILE" "--uninstall=ABSOLUTE_PATH_TO_YOUR_EXE_FILE"');
    },
    install(options) {
        if (!options.path) {
            logger.error('You must provide a path to your exe for installing a service');
            process.exit();
        }

        const service = new Service({
            name:'[Deecicison] ' + options.path,
            description: '[Deecision] No description available',
            script: options.path
        });

        service.install();
    },
    uninstall(options) {
      console.log(options)
        if (!options.path) {
            logger.error('You must provide a path to your exe for uninstalling a service');
            process.exit();
        }

        const service = new Service({
            name:'[Deecicison] ' + options.path,
            description: '[Deecision] No description available',
            script: options.path
        });

        service.uninstall();
    }
};

const error = 'Invalid command, commands are "--install=ABSOLUTE_PATH_TO_YOUR_EXE_FILE" "--uninstall=ABSOLUTE_PATH_TO_YOUR_EXE_FILE"';

if (1 !== Object.keys(options).length) {
    logger.error(error);
    process.exit();
}

const command = commands[commandName];

if (typeof command !== 'function') {
    logger.error(error);
    process.exit();
}

command(options);
