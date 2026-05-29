#!/usr/bin/env bun

import { Command } from 'commander';
import { runWakeup } from './tui/wakeup';

const program = new Command();

program
  .name('rexclaw-build')
  .description('A build tool for Rexclaw projects')
  .version('1.0.0');

program
  .command('wakeup')
  .description('Wake up the Rexclaw build system')
  .action(async () => {
    await runWakeup();
  });

await program.parseAsync(process.argv);
