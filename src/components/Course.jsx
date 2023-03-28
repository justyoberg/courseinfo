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
  </div>
  )
}

export default Course