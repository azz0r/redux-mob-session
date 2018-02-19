import React from "react"

import GameName from "../game/name"
import GameStarted from "../game/started"

import "./page.css"

const Page = () => (
  <section className="Page">
    <GameName />
    <GameStarted />
  </section>
)

export default Page
