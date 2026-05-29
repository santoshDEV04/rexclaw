import { select, isCancel } from '@clack/prompts';
import chalk from "chalk";
import { runWakeup } from '../tui/wakeup';


export async function runCliMode() {
  while(true) {
    const mode = await select({
      message: 'Choose CLI submode:',
      options: [
        { value: 'agent', label: 'Agent Mode'},
        { value: 'plan', label: 'Plan Mode'},
        { value: 'ask', label: 'Ask Mode'},
        { value: 'back', label: '<-- Back to Main Menu'},
      ]
    })

    if(isCancel(mode) || mode === 'back') {
      console.log(chalk.dim('\n Returning to main menu... \n'));
      await runWakeup();
    }

    if(mode === 'agent') {
      console.log(chalk.dim('Starting Agent Mode...'))
    } else if(mode === 'plan') {
      console.log(chalk.dim('Starting Plan Mode...'))
    } else if(mode === 'ask') {
      console.log(chalk.dim('Starting Ask Mode...'))
    }

    if(mode !== 'agent' && mode !== 'plan' && mode !== 'ask') {
      console.log(chalk.red('Invalid option, please try again.'))
    }
  }
}