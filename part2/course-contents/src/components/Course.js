import React from 'react'

const Header = props =>
  <h1>{props.course}</h1>

const Part = props =>
<p>{props.part.name} {props.part.exercises}</p>

const Total = ({parts}) => {
  const total = parts.reduce((acc, val) => acc + val.exercises, 0)
  return <h3>total of  {total} exercises</h3>
}

const Content = props => {
     return props.parts.map((part)=> <Part key={part.id} part={part} />)
}

const Course = ({course}) => {    
  return (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts}/>
    <Total parts={course.parts} />
  </div>
  )
}

export default Course;