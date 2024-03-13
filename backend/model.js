const mongoose=require('mongoose');
const schema =mongoose.Schema;

const userSchenma=new schema(
    {
        id:Number,
        name:String,
    }
)

const User =mongoose.model('User',userSchenma);
module.exports=User;

