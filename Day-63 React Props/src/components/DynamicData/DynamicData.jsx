import React from 'react'

const DaynamicData = (props) => {
  const exploreStyle = {
    border: 10px solid red,
    color: green,
    padding: 5px
  }

  return (
    <div>
        <h2> Daynamic Data is</h2>
        <h2>Name: {props.name}</h2>
        <h2>Name: {props.age}</h2>
    </div>
  )
}

export default DaynamicData