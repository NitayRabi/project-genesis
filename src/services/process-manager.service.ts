/**
 * Process manager sets rules for the entire process.
 */
export class ProcessManagerService {
    /**
     * Don't break process on promise unhandled rejections
     */
    handlePromiseRejections() {
        process.on('unhandledRejection',  (reason, p) => {
            console.error("Possible unhandled rejection at: Promise ", p, " reason: ", reason);
        });
    }

    handleWarnings() {
        process.on('warning', (warning) => {
            console.warn(warning.name); // Print the warning name
            console.warn(warning.message); // Print the warning message
            console.warn(warning.stack); // Print the stack trace
        });
    }
}

export const processManagerService = new ProcessManagerService();