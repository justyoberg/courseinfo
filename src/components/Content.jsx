const Content = ({ parts }) => {
  return parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)
}

export default Content