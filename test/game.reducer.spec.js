import reducer from "../src/reducers/game"
import * as types from "../src/actions/types"

const action = {
  type: types.RESET,
  payload: false,
}

describe("given a game reducer", () => {
  let activeReducer

  before(() => (activeReducer = reducer(undefined)))

  it("default started to false", () => {
    expect(activeReducer.started).to.equal(false)
  })

  describe("and a START_GAME request is sent", () => {
    before(() => {
      action.type = types.START_GAME
      activeReducer = reducer(activeReducer, action)
    })

    it("set the game started to TRUE", () => {
      expect(activeReducer.started).to.equal(true)
    })
  })

  describe("and a STOP_GAME request is sent", () => {
    before(() => {
      action.type = types.STOP_GAME
      activeReducer = reducer(activeReducer, action)
    })

    it("set the game started to FALSE", () => {
      expect(activeReducer.started).to.equal(false)
    })
  })
})
