const express = require ('express');
const mongoose =require('mongoose');

const app = express();


mongoose.connect('mongodb+srv://allef:allef@cluster0-lgvpo.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/')
app.post('/users', (req,resp) =>{
    console.log(req.body);
    return resp.json({message:'Pelo amor de cristo'});
})


app.listen(3333);
