const express=require('express');
const user = require("./models/user");
require('./config/connect');   //appel les fichier connect for connect with mongodb
const app = express();
app.use(express.json());
//add in db
app.post('/add',(req,res)=>{
    data=req.body;
    usr = new user(data);
    usr.save()
        .then(
            (saveuser)=>{
                res.send(saveuser)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
    //console.log(data);
    //console.log('add work');


} );

app.post('/create',async(req,res)=>{
    try{

    data=req.body;
    usr = new user(data);
    saveduser = await usr.save();
    res.send(saveduser)
    }catch (error){
        res.send(error)

    }
})

//this for get donner for db 
app.get('/getall', (req,res)=>{
    user.find({ age:28 })
        .then(
            (user)=>{
                res.send(user);
            }

        ).catch(
            (err)=>{
                res.send(err)
            }
        )
    //console.log('get work')
} );
app.get('/all',async(req,res)=>{
    try{
       const usr=await user.find({age:29});
        res.send(usr);

    }catch(error){
        res.send(error);
    }
})
app.put('/update',()=>{
    console.log('update')
});

app.delete('/delete',()=>{
    console.log('delete')


});

app.listen(3000 ,()=>{
    console.log('hello aymen')
});