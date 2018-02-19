import React from "react"

import Container from "../game/started.container"
import OldStyle from "../game/old-style"

import "./page.css"

const Page = () => (
  <section className="Page">
    <header>Container</header>
    <Container />
    <hr />
    <header>Old Style Component</header>
    <OldStyle />
  </section>
)

export default Page
