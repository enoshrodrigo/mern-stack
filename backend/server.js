//const app =require('./app');
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose=require('mongoose');
const router=require('./router');

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const uri='mongodb+srv://enoshrodrigo930:enoshrodrigo930@cluster0.bj1l63v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect =async ()=>{
    try{
await mongoose.connect(uri)
console.log('Conected to MongoDB');
    }catch(err){
console.log(' MongoDB ',err);
      
    }
}
connect();

 app.listen(3001, '127.0.0.1',()=>{
    console.log('Node server is listening to |||')
})

app.use('/api',router);
