
import Terminal from "./Terminal";
import { Log } from "./Log";
import Files from "./Files";

class TerminalExtender extends Terminal {

    logs : Log[];
    constructor() {
        super();
        this.logs = [];
    }

    async readLogsFromFile(path : string) {

        const data = await Files.read(path);
        let convertedData = data.split(',');

        for (let log of convertedData) {
            
            let type = 'info';
            const s = log.includes(`_warning_`);
            const s2 = log.includes(`_error_`);

            if (s) {
                type = 'warning';
                log = log.replace(/_warning_/, ` `);
            }
            else if (s2) {
                type = 'error';
                log = log.replace(/_error_/, ` `);
            }
            this.pushLog(new Log(log, type));
        }
    }

    pushLog(log : Log) {
        this.logs.push(log);
    }

    pushLogs(arr : Log[]) {
        for (let log of arr) {
            this.logs.push(log);
        }
    }

    printLog(index : number, values : string[]) {
        let counter = 1;
        for (let value of values) {
            let str = `RESERVED_VALUE_${counter}`;
            this.logs[index].text = this.logs[index].text.replace(str, value);
            counter++;
        }
        this.say("\n" + this.logs[index].text);
    }
}

export default new TerminalExtender();