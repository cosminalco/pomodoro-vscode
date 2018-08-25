'use strict'
import * as vscode from 'vscode'
import { Pomodoro } from './pomodoro'
export function activate(context: vscode.ExtensionContext) {
  const pomodoro = new Pomodoro(context)
  const startPause = vscode.commands.registerCommand('extension.pomodoroStartPause', () => pomodoro.startPause())
  const reset = vscode.commands.registerCommand('extension.pomodoroReset', () => pomodoro.reset())
  context.subscriptions.push(startPause, reset)
  vscode.workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration('pomodoro')) pomodoro.setup()
  })
}
export function deactivate() {}
