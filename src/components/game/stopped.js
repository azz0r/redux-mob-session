import React from "react"
import PropTypes from "prop-types"

const NOOP = () => {}

const Stopped = ({ startGame = NOOP, buttonTitle = "" }) => [
  <header key="stopped-title">The game is RUNNING</header>,
  <button key="stopped-button" onClick={startGame}>
    {buttonTitle}
  </button>,
]

Stopped.propTypes = {
  startGame: PropTypes.func,
  buttonTitle: PropTypes.string,
}

export default Stopped
