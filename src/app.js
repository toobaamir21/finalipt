const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')
const  Playlist = require('./models/user')
//const { appendFile } = require('fs')
const Register = require('./models/booking')

const static_path = path.join(__dirname,'../public')
app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path))


  
  

app.set('views','../views')
app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('index')

})

app.get('/gallery',(req,res)=>{
    res.render('gallery')

})
app.get('/contact',(req,res)=>{
    res.render('contact')

})

app.post('/contact',async(req,res)=>{
      try {
       // res.send(req.body)
       const userData = new Playlist(req.body)
       await userData.save()
       res.status(201).render('index')
      } catch (error) {
        res.status(500).send(error)
      }
})
app.get('/booking',(req,res)=>{
   res.render('booking')

})
app.post('/booking',async(req,res)=>{
    try {
        
     // res.send(req.body)
     const userData = new Register(req.body)
     await userData.save()
     res.status(201).render('submit')
   
     
    } catch (error) {
      res.status(500).send(error)

    }
   

})

  
       
   


var a= Math.floor((Math.random() * 101));
app.get('/submit',(req,res)=>{
    res.render("submit",{
      error:a,
      

    })
})


app.listen(8000,()=>{
    console.log('listening to port 8000')
})

