import React from "react"
import PropTypes from "prop-types"

const NOOP = () => {}

const Started = ({ stopGame = NOOP, buttonTitle = "" }) => [
  <header key="start-title">The game has STOPPED</header>,
  <button key="start-button" onClick={stopGame}>
    {buttonTitle}
  </button>,
]

Started.propTypes = {
  stopGame: PropTypes.func,
  buttonTitle: PropTypes.string,
}

export default Started
