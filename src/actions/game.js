import { START_GAME, STOP_GAME, RESET } from "./types"
import chalk from "chalk"

export function startGame() {
  console.log("Action", "startGame")

  return {
    type: START_GAME,
  }
}

export function stopGame() {
  console.log("Action", "stopGame")

  return {
    type: STOP_GAME,
  }
}

export function resetGame() {
  console.log("Action", "resetGame")

  return {
    type: RESET,
  }
}
