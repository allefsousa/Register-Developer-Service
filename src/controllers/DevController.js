const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {
    async home(request,response){
        return response.send("Register Developer Service Home");

    },
    async index(request,response){
        const devs = await Dev.find();
        return response.json(devs);

    },



    async store (req,resp) {
        console.log(req.body);
        const {github_username, techs, latitude,longitude} = req.body;  // recuprando nome passado no body
        console.log(github_username)



        let dev = await Dev.findOne({github_username})
        if(!dev){
                /**
         * Buscando um Dev no serviço do Github com o id do usuario
         */
        const response = await axios.get(`https://api.github.com/users/${github_username}`)
        console.log(response.data)
    
        const {name = login,avatar_url,bio} = response.data
    
        const techArrays = parseStringAsArray(techs);
    const location ={
        type:'Point',
        coordinates:[longitude,latitude],
    };
    
    
        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs:techArrays,
            location,
        });
        return resp.json(dev);

    
        }else{
            resp.status(404);
            return resp.json({message:"Usuario Já existe"})

        }
    }
}