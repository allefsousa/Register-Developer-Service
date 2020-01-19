const {Router} = require('express');

const routes  = Router();

routes.post('/users', (req,resp) =>{
    console.log(req.body);
    return resp.json({message:'Pelo amor de cristo'});
})

module.exports = routes;
