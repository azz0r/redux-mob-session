import React from "react"
import PropTypes from "prop-types"

const NOOP = () => {}

const Stopped = ({ startGame = NOOP }) => [
  <h2 key="stopped-title">The game is RUNNING</h2>,
  <button key="stopped-button" onClick={startGame}>
    Click here to stop the game
  </button>,
]

Stopped.propTypes = {
  startGame: PropTypes.func,
}

export default Stopped
