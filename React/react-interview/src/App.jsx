import Student from './Student.jsx';
import './App.css';
import {useState , useEffect} from "react"

function App() {
    const students = [
        { id: 1, name: "Aaditya", branch: "IT" , cgpa : 9.36},
        { id: 2, name: "Rahul", branch: "CSE",cgpa : 9.00 },
        { id: 3, name: "Priya", branch: "ECE",cgpa : 8.00 }
    ];
    const[current , setCurrent] = useState("not eligible");
    const[user_api , setUser_api] = useState([]);
    const[searchName , setSearchName] = useState("");
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
        .then(data => setUser_api(data));
    } , []); // fetches data only one time
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
    // const[data , setData] = useState({
    //     name : "",
    //     password:""
    // });
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
    const[data , setData] = useState("");
    function receiveMessage(data){
        setData(data)
    }
    let matchCount = 0;
    return(
        <>
        <h1>message {data}</h1>
        <Student setData = {receiveMessage}></Student>
        </>
    )
//     return (
//         <>
//         <h1>count</h1>
//         <input type = "text" value = {data.name} onChange = {(e) => setData(prev => ({...prev , name : e.target.value}))} placeholder='enter ur name'/>
//         <p>{data.name}</p>
//         <input type = "password" value = {data.password} onChange = {(e) => setData(prev => ({...prev ,password : e.target.value}))} placeholder='enter ur password'/>
//         <button onClick = {() => setData({name : "" , password : ""})}>reset</button>
//         <button  disabled = {!data.name || !data.password} onClick = {() => alert(data.name)}>login</button>
//         <button onClick = {increment}>{count}</button>
//         <button onClick = {show_current}>show {current === "eligible" ? "not eligible" : "eligible"}</button>
//         {/*click is funcrion reference only so function is called when button is clicked and in click() function is called irrespective*/}
//             <h1>Student Directory</h1>

//            {students.map((student) =>{
//             let eligibility = "not eligible";
//             if(student.cgpa >= 8.5){
//                 eligibility = "eligible";
//             }
//             return(
//             eligibility == current ?(
//             <Student 
//             key = {student.id}
//             // id is needed for iterating
//             name = {student.name}
//             branch = {student.branch}
//             cgpa = {student.cgpa}
//             eligibility = {eligibility}
//             />) : (<></>)
// )})}
//     <input type = "text" value = {searchName} placeholder = "enter the name u want to seacrh" onChange={(e) => {setSearchName(e.target.value)}}/>
//             {
//             user_api.map((user) =>{
//                 let isMatch = user.name.toLowerCase().includes(searchName.trim().toLowerCase());
//                 if(isMatch){
//                     matchCount++
//                     return(<div key = {user.id}><strong>{user.name}</strong> - {user.email}</div>);
//                 }
//                 return null;
//             })
//     }
//     {user_api.length > 0 && matchCount == 0 &&
//     <p>NO USERS FOUND</p>
//     }
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
        // </>
    // );
}

export default App;
