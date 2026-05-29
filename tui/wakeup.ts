import {select, isCancel} from '@clack/prompts';
import chalk from "chalk";
import figlet from "figlet"


const BANNER_FONT = "ANSI Shadow"
const SHADOW = chalk.hex("#a16ee8")
const FACE = chalk.hex('#e0aaff').bold;

export async function runWakeup() {
  let ascii: string;

  try {
    ascii = figlet.textSync("Rexclaw", { font: BANNER_FONT });
  } catch (error) {
    console.error("Error generating ASCII art:", error);
  }
  
}