function Student({name , branch , cgpa , eligibility}){
  return(
    <div>
      <h1>student name is {name}</h1>
      <h1>student branch is {branch}</h1>
      <h1>student cgpa is {cgpa}</h1>
      <h1>{eligibility}</h1>
    </div>
  )
}

export default Student;