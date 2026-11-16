import Student from './Student.jsx';
import './App.css';
import {useState} from "react"

function App() {
    const[count , setCount] = useState(0);
    function increment(){
       setCount(count + 1);
    // setCount(prev => prev + 1);
    // add an element: setItems(prev => [...prev, 40]);
    // to remove and element: setItems(prev => prev.filter(item => item !== 20));
    // to modify: setItems(prev =>
    // prev.map(item => item === 20 ? 25 : item)
// );
    }
    function click(){
        alert("button clicked");
    }
     const[user , setUser] = useState({
            name : "Aaditya",
            age: 21
        });
    function updateUser(){
        setUser({
            ...user,
            age:22
        });
        setUser({
            ...prev,
            age:22
        })
    }
    return (
        <>
        <h1>count</h1>
        <button onClick = {increment}>{count}</button>
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
