import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import chalk from "chalk"

import { startGame, stopGame } from "../../actions/game"

import Started from "./started"
import Stopped from "./stopped"

class OldStyle extends Component {
  onSetStarted = () => {
    console.log("OldStyle component", "onSetStarted")

    this.props.dispatch(startGame())
  }

  onSetStopped = () => {
    console.log("OldStyle component", "onSetStopped")

    this.props.dispatch(stopGame())
  }

  render() {
    const { started } = this.props

    if (started) {
      return <Started stopGame={this.onSetStopped} />
    } else {
      return <Stopped startGame={this.onSetStarted} />
    }
  }
}

OldStyle.propTypes = {
  started: PropTypes.bool,
}

OldStyle.defaultProps = {
  started: false,
}

export default connect(state => ({
  started: state.game.started,
}))(OldStyle)
