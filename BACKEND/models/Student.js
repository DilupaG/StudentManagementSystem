const mongoose = require('mongoose');

//create a schema to add studntName,age,school
const schema = mongoose.Schema;

//create a student schema(like a student class) by using previously created schema
const studentSchema = new schema({

    name : {
        type : String,  //data type
        required : true  //there should be a name to add a student into the db(backedn validation)
    },
    age : {
        type : Number,
        required : true //backend validation
    }, 
    gender:{
        type : String,
        required : true
    }

})

//module(document or table name , schema we created);    uppercase->lowercase , singuler->plural
const Student = mongoose.model("Student",studentSchema); //in the database Student automatically changed to students

//remember to export student 
module.exports = Student;