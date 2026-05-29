import { isCancel, text } from "@clack/prompts"
import chalk from "chalk";
import { defaultAgentConfig } from "./types.ts"
import { ActionTracker } from "./action-tracker.ts";

export async function runAgentMode() {
  console.log(chalk.bold('\n Agent Mode \n'));

  const goal = await text({
    message: "what would you like the agent to do?",
    placeholder: "Concrete task for this codebase....",
  });

  if(isCancel(goal) || !goal.trim()) return;

  const config = defaultAgentConfig()

  const tracker = new ActionTracker()
}