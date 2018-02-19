import { connect } from "react-redux"
import { compose, branch, renderComponent } from "recompose"

import { startGame, stopGame } from "../../actions/game"

import buttonTitle from "../../selector/buttonTitle"
import Started from "./started"
import Stopped from "./stopped"

const enhance = compose(
  connect(
    state => ({
      ...state.game,
    }),
    dispatch => ({
      startGame: () => dispatch(startGame()),
      stopGame: () => dispatch(stopGame()),
    }),
  ),
  buttonTitle,
  branch(
    props => props.started,
    renderComponent(Started),
    renderComponent(Stopped),
  ),
)

export default enhance(Started)
