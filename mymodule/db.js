const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/students";
mongoose.connect(url, function(err, students) {
    if (err) throw err;
    console.log("数据库已创建!");
    //db.close();
  });
module.exports=mongoose;