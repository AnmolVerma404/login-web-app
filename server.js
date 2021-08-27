const express = require("express");
const app = express();

app.set('view-engine','ejs');   
app.use(express.urlencoded({extended:false}));  //We will use this as the information will be coming through form, therefor now we can access the name, email and password inside the server

app.get('/',(req,res)=>{
    res.render('index.ejs',{name:'Anmol'});
})  
app.get('/login',(req,res)=>{
    res.render('login.ejs');
})
app.post('/login',(req,res)=>{
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
})
app.get('/register',(req,res)=>{
    res.render('register.ejs');
})
app.post('/register',(req,res)=>{
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
})

app.listen(3000)