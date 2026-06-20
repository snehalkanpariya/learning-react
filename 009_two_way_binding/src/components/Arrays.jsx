import { useState } from 'react'

const Arrays = () =>{
    const[students,setStudents] = useState(
        [
            {
                name:'Snehal',Marks:56,
            },
            {
                name:'Aravi',Marks:89
            }
        ]
    )

    const addStudent = (student) => {
        const newStudents = {
            name:student,
            Marks:89
        }
        setStudents([...students,newStudents])
    }


    const removeStudent = (student) =>{
        setStudents(students.filter(students => students.name !== student))
    }
    return(
        <div className="students">
          {
            students.map(
                (student,index) => (
                    <div key={index} style={{ margin: '10px'}}  className="card">
                        <h2> Name: {student.name} </h2>
                        <h2> Marks: {student.Marks}</h2>
                        <button onClick={() => removeStudent(student.name)} className="remove"> Remove </button>
                    </div>
                )
            )
          }
          <button onClick={() => addStudent('krishiv')} className="add"> Add </button>
        </div>
    )
}

export default Arrays