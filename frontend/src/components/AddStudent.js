import React,{useState} from "react";



function AddStudent(){

    return(

        <div className="container">
            <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Student Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Student Name"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Student Age</label>
                <input type="text" className="form-control" id="age" placeholder="Enter Student Age"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label">Student Gender</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender"/>
                
            </div>
            
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    )
}

export default AddStudent