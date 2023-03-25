const Part = (props) => {
  return <p>{props.part} {props.exercise}</p>
}

const Content = (props) => {
  const {name, part1, part2, part3} = props
  console.log(part1)
  return (
    <div>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
    </div>
  )
}

export default Content