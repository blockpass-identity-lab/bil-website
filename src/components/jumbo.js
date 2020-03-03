import React from "react"
import { Jumbotron, Button } from "react-bootstrap"

const Jumbo = () => {
  // Jumbotron Which will hold events
  return (
    <Jumbotron className="jumbo">
      <h1 className ="border">Slider</h1>
      <p>
        This space will possibly be later occupied by current / recent events :)
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}

export default Jumbo
