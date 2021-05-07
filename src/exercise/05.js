// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
function Box({className = '', style, children}) {
  const classes = `box ${className}`.trim()
  const styles = {fontStyle: 'italic', ...style}
  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  )
}

function Box1({size, style, children}) {
  const sizeClass = size ? `box--${size}` : ''
  const classes = `box ${sizeClass}`.trim()
  const styles = {fontStyle: 'italic', ...style}
  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  )
}

const smallBox = (
  <div
    className="box box--small"
    style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{backgroundColor: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{backgroundColor: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box style={{backgroundColor: 'red'}}>This is a box</Box>
      <Box1 size="small" style={{backgroundColor: 'blue'}}>
        This is a box
      </Box1>
      <Box>This is an empty box</Box>
      <Box1>This is an empty box1</Box1>
    </div>
  )
}

export default App
