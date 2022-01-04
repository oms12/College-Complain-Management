import mongoose from "mongoose";
const complainSchema = mongoose.Schema({
    rollno : {type : String , required : true},
    createdAt:{
        type : Date,
        default: new Date()
    },
    title : {type : String , required : true},
    subject : {type : String , required : true},
    message : {type : String , required : true},
    resolve : {type : String}
});
const Complain = mongoose.model("Complain",complainSchema);
export default Complain;