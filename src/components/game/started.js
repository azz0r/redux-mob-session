import React from "react"
import PropTypes from "prop-types"

const NOOP = () => {}

const Started = ({ stopGame = NOOP }) => [
  <h2 key="start-title">The game has STOPPED</h2>,
  <button key="start-button" onClick={stopGame}>
    Click here to start the game
  </button>,
]

Started.propTypes = {
  stopGame: PropTypes.func,
}

export default Started
