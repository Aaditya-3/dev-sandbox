function Student({setData}){
  function handleClick(){
    setData(" : message from child");
  }
  return(
    <div>

      {/* <h1>student name is {name}</h1>
      <h1>student branch is {branch}</h1>
      <h1>student cgpa is {cgpa}</h1>
      <h1>{eligibility}</h1> */}
      <button onClick={handleClick}>click for child message</button>
    </div>
  )
}

export default Student;