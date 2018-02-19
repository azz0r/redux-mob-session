import React from "react"

export const Started = ({ started = false }) => {
  const title = started ? "The game is started" : "The game is NOT started"

  return <p>{title}</p>
}
export default Started
