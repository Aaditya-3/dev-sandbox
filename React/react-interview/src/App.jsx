import Student from './Student.jsx';
import './App.css';
import {useState} from "react"

function App() {
    const[count , setCount] = useState(0);
    function increment(){
        count = setCount(count + 1);
    }
    function click(){
        alert("button clicked");
    }
    return (
        <>
        <h1>count</h1>
        <button onClick = {click}>{count}</button>
        {/*click is funcrion reference only so function is called when button is clicked and in click() function is called irrespective*/}
            <h1>Student Directory</h1>

            <Student
                name="Aaditya"
                branch="Information Technology"
                cgpa={9.36}
            />

            <Student
                name="Rahul"
                branch="Computer Science"
                cgpa={8.90}
            />

            <Student
                name="Priya"
                branch="Electronics"
                cgpa={9.10}
            />
        </>
    );
}

export default App;
