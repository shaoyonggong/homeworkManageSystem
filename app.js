const express=require("express");
const studentModel=require("./mymodule/studentModel");
const app=new express();

//设置模板引擎ejs
app.set("view engine","ejs");
//设置静态资源托管
app.use(express.static('public'));
//转换表单使用post提交
app.use(express.urlencoded({ extended: true })) 
//查询
app.get("/list",(req,resp)=>{
    studentModel.find({},(err,data)=>{
        //console.log("list");
        //console.log(data.toString());
        resp.render("list",{students:data});
    });
});
//增加
app.post("/save",(req,resp)=>{
    
    let studentData=req.body;
    studentData.stuSex=studentData.stuSex=="1"?"男":"女";
    let student=new studentModel(studentData);
    student.save((err)=>{
        if(err){
            console.log(err);
            return;
        }
        resp.redirect("/list");
    });
});
//修改
app.get("/update/:stuId",(req,resp)=>{
    //获得了需要修改的数据的编号
    let stuId=parseInt(req.params.stuId);
    studentModel.find({"stuId":stuId},(err,data)=>{
       resp.render("update",{student:data[0]});
    });
});

app.post("/updateHandler",(req,resp)=>{
    let studentData=req.body;
    studentData.stuSex=studentData.stuSex=="1"?"男":"女";
    
    studentModel.updateOne({"stuId":studentData.stuId},
        {"stuName":studentData.stuName,"stuSex":studentData.stuSex,"stuAge":studentData.stuAge},
        (err)=>{
            if(err){
                console.log("修改失败");
                resp.redirect("/error.html");
            }else{
                resp.redirect("/list");
            }
        });
});
//删除
app.get("/delete/:stuId",(req,resp)=>{
    let stuId=parseInt(req.params.stuId);
    studentModel.deleteOne({"stuId":stuId},(err)=>{
        if(err){
            console.log("修改失败");
            resp.redirect("/error.html");
        }else{
            resp.redirect("/list");
        }
    });
});

app.listen(7000);
