import { connect } from "react-redux"
import { compose } from "recompose"

export const buttonTitle = compose(
  connect(state => ({
    buttonTitle: state.game.started ? "BOOOOM" : "POOOOWWWW",
  })),
)

export default buttonTitle
