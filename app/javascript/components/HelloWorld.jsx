import React, { useState } from "react"
import PropTypes from "prop-types"

const HelloWorld: React.FC = (props) => {

  const [count, setCount] = useState(10);

  return (<button onClick={() => setCount(count => count + 1)}>{count}</button>)
}

HelloWorld.defaultProps = {
  greeting: 'Bartek'
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
