import Student from './Student.jsx';
import './App.css';
import {useState} from "react"

function App() {
    const students = [
        { id: 1, name: "Aaditya", branch: "IT" , cgpa : 9.36},
        { id: 2, name: "Rahul", branch: "CSE",cgpa : 9.00 },
        { id: 3, name: "Priya", branch: "ECE",cgpa : 8.00 }
    ];
    const[current , setCurrent] = useState("not eligible");
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
    function show_current(){
        if(current == "eligible"){
        setCurrent("not eligible");
        }
        else{
        setCurrent("eligible");
        }
    }
    return (
        <>
        <h1>count</h1>

        <button onClick = {increment}>{count}</button>
        <button onClick = {show_current}>show {current}</button>
        {/*click is funcrion reference only so function is called when button is clicked and in click() function is called irrespective*/}
            <h1>Student Directory</h1>

           {students.map((student) =>{
            let eligibility = "not eligible";
            if(student.cgpa >= 8.5){
                eligibility = "eligible";
            }
            return(
            eligibility != current ?(
            <Student 
            key = {student.id}
            // id is needed for iterating
            name = {student.name}
            branch = {student.branch}
            cgpa = {student.cgpa}
            eligibility = {eligibility}
            />) : (<></>)
)})}

            {/* <Student
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
            /> */}
        </>
    );
}

export default App;
