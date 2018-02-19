import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { compose } from "recompose"

import { startGame, stopGame } from "../../actions/game"

import Started from "./started"
import Stopped from "./stopped"
import buttonTitle from "../../selector/buttonTitle"

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
    const { started, buttonTitle } = this.props

    if (started) {
      return <Started buttonTitle={buttonTitle} stopGame={this.onSetStopped} />
    } else {
      return <Stopped buttonTitle={buttonTitle} startGame={this.onSetStarted} />
    }
  }
}

OldStyle.propTypes = {
  started: PropTypes.bool,
  buttonTitle: PropTypes.string,
}

OldStyle.defaultProps = {
  started: false,
  buttonTitle: "DEFAULT BUTTON TITLE",
}

const enhance = compose(
  connect(state => ({
    started: state.game.started,
  })),
  buttonTitle,
)

export default enhance(OldStyle)
