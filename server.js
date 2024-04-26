//node js and mongo db
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
const mongoURL = "mongodb+srv://sneha:snehajay@cluster0.c6ztlvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoURL)
.then(() => {
    console.log("connected to the database");
}).catch((err)=>{
    console.error('Error connecting to Mongodb:',err);
})
app.post('/server-kiot',(req,res)=>{
    var data = req.body;
    const newFormData = new FormData({
        name: data.Name,
        email: data.Email,
        phone: data.Phone
    })
    console.log(data);
    res.send(data);
});
app.get('/server-get',(req,res)=>{
    var data = req.query;
    console.log(data);
    res.send(data);
});
app.listen(7777,()=>{console.log("Running on port 7770")});