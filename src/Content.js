const Part = (props) => {
  return <p>{props.name} {props.exercise}</p>
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, i) => 
        <Part name={part.name} key={i} exercise={part.exercise}/>
      )}
    </div>
  )
}

export default Content