import React,{useState} from "react";
import axios from "axios"; //pass data from frontend to backend 

function AddStudent(){

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");

    function sendData(e){

        e.preventDefault();

        const newStudent={
            name,
            age,
            gender
        }
        console.log(newStudent);

        //using axios we passing data to the backend. (add student backend url , pass karana data eka)
        axios.post("http://localhost:8070/student/add", newStudent).then(()=>{
           
            alert("Student Added!")

            setName("")
            setAge("")
            setGender("")

        }).catch((e)=>{
            alert(e)
        })

    }

    return(

        <div className="container">
            <form onSubmit={sendData}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Student Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Student Name" onChange={(e)=>{setName(e.target.value)}}/> 
                {/* onChange event handle using the setName function. when we type in name field the values will be assinged to the name  */}
                
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Student Age</label>
                <input type="text" className="form-control" id="age" placeholder="Enter Student Age" onChange={(e)=>{
                    setAge(e.target.value)
                  }}
                />
                
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label">Student Gender</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender"
                    onChange={(e)=>{   
                        setGender(e.target.value)
                    }}
                />
                
            </div>
            
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    )
}

export default AddStudent