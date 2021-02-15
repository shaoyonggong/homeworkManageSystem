// const mongoose1 = require("mongoose");

// const url = "mongodb://localhost:27017/students";
// const db = mongoose1.createConnection(url, function(err, db) {
//     if (err) throw err;
//     console.log("数据库已创建!");
//     //db.close();
//   });

// const model=db.model('user',{
//     stuId:{type:Number,index:true,unique:true},
//     stuName:{type:String,required:true},
//     stuSex:{type:String,default:"男",enum:['男','女']},
//     stuAge:{type:Number,min:18,max:120}
// });


// const insertObject = new model({
//     stuId:"101",
//     stuName:"shangsan",
//     stuSex:"女",
//     stuAge:"18"
// });

// insertObject.save().then(res=>{
//     console.log("insert success");
//     return res;
// }).catch(err=>{
//     console.log("insert error"+err);
//     return false;
// });
