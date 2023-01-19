const mongoose=require('mongoose')
const validator=require('validator')
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/iptdata",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('successful')).catch((err)=>console.log(err))
const playlistSchema = new mongoose.Schema({
    name:{
       type: String,
       required:true,
       minLength:3
    },
    email:{
        type: String,
        required:true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email id')
            }
        }
     }
    ,
    phone:{
        type: Number,
        required:true,
        min:11
        
     },
     message:{
        type: String,
       
     }

})

const Playlist = new mongoose.model("Playlist",playlistSchema)
module.exports = Playlist;
