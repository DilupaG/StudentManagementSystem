const router = require("express").Router();
const { request } = require("express");
let Student = require("../models/Student");





//  http://localhost:8070/student/add
//router for create function 
router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age); //casting age from string to number format 
    const gender = req.body.gender;

    const newStudent = new Student({
        name, 
        age,
        gender
    })

    //pasing data from backend to the database through the Student schema.(class ekakin db ekata dta pass karanaa wage). then sucess msg 
    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{           //else console the error
        console.log(err);
    })

})







//  http://localhost:8070/student/

//router for display data
router.route("/").get((req,res)=>{

    Student.find().then((student)=>{
        res.json(student)
    }).catch((err)=>{
        console.log(err);
    })

})






//  http://localhost:8070/student/update/id
//: daapanne backend url eken selected student id eka wenkaraganna

//router for update single student using assync await function
router.route("/update/:id").put(async (req,res)=>{
   
    let userID = req.params.id;          //fetch the id from backend url 

    //using distrucure method get the updated values from backend url
    const {name,age,gender} = req.body;

    //create an update object
    const updatedStudent = {
        name,
        age,
        gender
    }

    //async function AWAIT for student update. after the update await recived a promise and then assync function takes other request.
    const update = await Student.findByIdAndUpdate(userID,updatedStudent).then(()=>{  //if=then
        res.status(200).send({status: "User updated"})
    }).catch((err)=>{     //else
        console.log(err);
        res.status(500).send({status: "User did not update !"})
    })

})






//  http://localhost:8070/student/delete/id


//router for delete single student using assync await function
router.route("/delete/:id").delete(async (req,res)=>{
   
    let userID = req.params.id;          //fetch the id from backend url 

    //async function AWAIT for student delete. after the delete, await recived a promise and then assync function takes other request.
    await Student.findByIdAndDelete(userID).then(()=>{  //if=then
        res.status(200).send({status: "User deleted"})
    }).catch((err)=>{     //else
        console.log(err);
        res.status(500).send({status: "User did not deleted !"})
    })

})





//get perticular student details
router.route("/get/:id").get(async (req,res)=>{

    let userID = req.params.id;

    const user = await Student.findById(userID).then((student)=>{
        res.status(200).send({status:"User found", student})
    }).catch((err)=>{
        res.status(500).send({status:"user not found !"})
    })

})





//mathak karala daaaaappppppaaaaaaaannnnnnn
//export the module
module.exports=router;