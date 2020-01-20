const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/dev');

const routes  = Router();

routes.post('/devs', async (req,resp) =>{
    console.log(req.body);
    const {github_username, techs } = req.body;  // recuprando nome passado no body
    console.log(github_username)


    const response = await axios.get(`https://api.github.com/users/${github_username}`)
    console.log(response.data)

    const {name = login,avatar_url,bio} = response.data

    const techArrays = techs.split(',').map(tech => tech.trim())
    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs:techArrays,
    });

    return resp.json(dev);
});

module.exports = routes;
