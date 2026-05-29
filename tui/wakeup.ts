import { isCancel, select } from '@clack/prompts'
import chalk from 'chalk'
import figlet from 'figlet'

const BANNER_FONT = 'ANSI Shadow'

const FACE = chalk.hex('#c4b5fd').bold
const BORDER = chalk.hex('#e6d8fe')
const TAGLINE = chalk.hex('#d8b4fe').italic('Rexclaw build tool — choose a mode to continue')

function printBannerWithShadow(ascii: string) {
  const bannerLines = ascii.replace(/\s+$/, '').split('\n')
  const maxLen = Math.max(...bannerLines.map(line => line.length), 0)
  const rowWidth = maxLen + 6
  const horizontalBorder = BORDER(' '.repeat(rowWidth + 4))

  console.log(horizontalBorder)
  console.log(BORDER('  ' + ' '.repeat(rowWidth) + '  '))

  for (const line of bannerLines) {
    const padded = `  ${line}`.padEnd(rowWidth, ' ')
    console.log(BORDER('  ') + FACE(padded) + BORDER('  '))
  }

  console.log(BORDER('  ' + ' '.repeat(rowWidth) + '  '))
  console.log(horizontalBorder)
  console.log()
  console.log(TAGLINE)
  console.log()
}

export async function runWakeup() {
  let ascii = ''

  try {
    ascii = figlet.textSync('Rexclaw', { font: BANNER_FONT })
  } catch (error) {
    console.error('Error generating ASCII art:', error)
    ascii = 'Rexclaw'
  }

  printBannerWithShadow(ascii)

  const mode = await select({
    message: 'Which mode do you want to proceed with?',
    options: [
      { value: 'cli', label: 'Command Line Interface (CLI)' },
      { value: 'telegram', label: 'Telegram Bot' },
    ],
  })

  if (isCancel(mode)) {
    process.exit(0)
  }

  if (mode === 'cli') {
    console.log(chalk.dim("starting cli mode..."));
  } else if (mode === 'telegram') {
    console.log(chalk.dim('starting Telegram mode...'))
  }
}
