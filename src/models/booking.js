const mongoose=require('mongoose')
const validator=require('validator')
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/iptdata",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('successful')).catch((err)=>console.log(err))

const registerform = new mongoose.Schema({
    pkg:{
       type: String,
       required:true
       
       
    },
    name:{
        type: String,
        required:true,
        
     },
     email:{
        type: String,
        required:true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email id')
            }
        }
     },
    
    
    phone:{
        type: Number,
        required:true,
        min:11,
        
        
       
        
     },
 
     cnumber:{
        type: Number,
        required:true,
        
        
        min:14,
        
        
     },
     myplace:{
        type: String,
        required:true,
     },
    
     mypoint:{
        type: String,
        required:true,
       
     },
    
     myweek:{
        type: Number,
        required:true,
       
     },
     gender:{
      type: String,
      required:true,
      
      
      
   },
     AMorPM:{
      type: String,
      required:true,
      
      
      
   },

  
 

})
const Register = new mongoose.model("Register",registerform)
module.exports = Register;