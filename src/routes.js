const {Router} = require('express');

const routes  = Router();

routes.post('/devs', (req,resp) =>{
    console.log(req.body);
    const {github_username} = req.body;  // recuprando nome passado no body
    return resp.json({message:'Pelo amor de cristo'});
});

module.exports = routes;
