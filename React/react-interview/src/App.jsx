import Student from './student.jsx';
import './App.css';

function App() {
    return (
        <>
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
