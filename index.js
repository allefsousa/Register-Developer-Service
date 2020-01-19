const express = require ('express');

const app = express();


app.get('/')
app.get('/', (req,resp) =>{
    return resp.json({message:'Pelo amor de cristo'});
})


app.listen(3333);
