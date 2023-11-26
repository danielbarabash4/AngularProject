const express = require('express');
const mongoose = require('mongoose');

const server = express();
mongoose.connect("mongodb://localhost:27017/crud");

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

const UserModel = mongoose.model("users", UserSchema)

server.get('/getUsers', (req, res)=> {
    UserModel.find().then(function(users){
        res.json(users)
    }).catch(function(err){
        console.log(err)
    })
})

server.listen(3001,()=>{
    console.log('server is running on port 3001');
})