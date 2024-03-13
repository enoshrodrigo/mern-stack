const users=[
    {
        id:1,
        name:'ena'
    },
    {
        id:2,
        name:'bro'
    },
]
const { response } = require('./app');
const User =require('./model');



const getUser=(req,res,next)=>{
   User.find()
   .then(response=>{
  res.json({response})
   })
   .catch(err=>{
    res.json({message:err})
   })
}


const addUser=(req,res,next)=>{
    const user=new User({
        id:req.body.id,
        name:req.body.name,
    })
    user.save()
    .then(response=>{
        res.json({response})
         })
         .catch(err=>{
          res.json({message:err})
         })
}

const updateId=(req,res,next)=>{
    const {id,name}=req.body;
    User.updateOne({id:id},{$set:{name:name}})
    .then(response=>{
        res.json({response})
         })
         .catch(err=>{
          res.json({message:err})
         })
}


const deleteUser=(req,res,next)=>{
    const id=req.body.id;
    User.deleteOne({id})
    .then(response=>{
        res.json({response})
         })
         .catch(err=>{
          res.json({message:err})
         })
}



const getUserID=(id,cb)=>{
    const user=users.find(user=>user.id==id);
    cb(user);
};
 

exports.getUser=getUser,
exports.addUser=addUser;
exports.updateId=updateId;
exports.deleteUser=deleteUser;
