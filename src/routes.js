const { Router } = require('express');
const axios = require('axios');

const routes  = Router();

routes.post('/devs', async (req,resp) =>{
    console.log(req.body);
    const {github_username} = req.body;  // recuprando nome passado no body

    const r = await axios.get(`https://api.github.com/users/${github_username}`)
    console.log(r.data)
    return resp.json({message:'Pelo amor de cristo'});
});

module.exports = routes;
