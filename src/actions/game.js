import { START_GAME, STOP_GAME, RESET, UPDATE_GAME } as types from "./types"

export function startGame() {
  return {
    type: START_GAME,
  }
}

export function stopGame() {
  return {
    type: STOP_GAME,
  }
}

export function resetGame() {
  return {
    type: RESET,
  }
}
