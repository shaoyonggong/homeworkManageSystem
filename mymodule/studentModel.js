const mongoose=require("./db");

const studentSchema=mongoose.Schema({
    stuId:{type:Number,index:true},
    stuName:{type:String,required:true},
    stuSex:{type:String,default:"男",enum:['男','女']},
    stuAge:{type:Number,min:18,max:120}
});


const studentModel=mongoose.model("students",studentSchema);

module.exports=studentModel;