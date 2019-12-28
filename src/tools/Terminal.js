"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Header_1 = require("./Header");
const chalk = require('chalk');
const cls = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const CLI = require('clui');
const Spinner = CLI.Spinner;
class Terminal {
    constructor() {
        this.defaultColor = this.color(Header_1.COLORS.GREEN);
        this.spinner;
    }
    color(n) {
        switch (n) {
            case 1: return 'red';
            case 2: return 'green';
            case 3: return 'blue';
        }
    }
    say(text, color) {
        if (!color)
            color = this.defaultColor;
        console.log(chalk[color](text));
    }
    super(text, color) {
        if (!color)
            color = this.defaultColor;
        console.log(chalk[color](figlet.textSync(text, { horizontalLayout: 'full' })));
    }
    clear() {
        cls();
    }
    async ask(questions) {
        return await inquirer.prompt(questions);
    }
    async checkbox(questions) {
        return await inquirer.prompt(questions);
    }
    loading(text) {
        this.spinner = new Spinner(text);
    }
    loadingStart() {
        this.spinner.start();
    }
    loadingStop() {
        this.spinner.stop();
    }
}
;
exports.default = new Terminal();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVybWluYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdG9vbHMvVGVybWluYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBNkQ7QUFFN0QsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXJDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRTVCLE1BQU0sUUFBUTtJQUlWO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBUztRQUNYLFFBQVEsQ0FBQyxFQUFFO1lBQ1AsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQztZQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRUQsR0FBRyxDQUFDLElBQVksRUFBRSxLQUFjO1FBQzVCLElBQUksQ0FBQyxLQUFLO1lBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQVksRUFBRSxLQUFhO1FBQzdCLElBQUksQ0FBQyxLQUFLO1lBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsS0FBSztRQUNELEdBQUcsRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBcUI7UUFDM0IsT0FBTyxNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBcUI7UUFDaEMsT0FBTyxNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFZO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBRUo7QUFBQSxDQUFDO0FBRUYsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyJ9