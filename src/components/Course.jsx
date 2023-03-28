import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
const {id, name, parts} = course

return (
  <div>
    <Header key={id} name={name} />
    <ul>
      <Content parts={parts} />
    </ul>
    <p><b>Total of {parts.reduce((a, b) => a + b.exercises, 0)} exercises</b></p>
  </div>
  )
}

export default Course