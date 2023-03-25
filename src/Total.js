const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises.reduce((a, b) => a + b)} </p>
  )
}

export default Total