const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {
    async index(request,response){
        console.log(request.query)
        const {latitude,longitude,techs} = request.query;


        const techsArray = parseStringAsArray(techs);

        console.log(techsArray)
        const devs = await Dev.find({
            techs:{
                $in:techsArray
            },
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                        coordinates:[longitude,latitude],
                    },
                    $maxDistance:10000,
                }
            }
        });



        /**
         * Buscar todos os dev em um raio de 10KM 
         * Filtrar por tecnologia
         */
        // const devs = await Dev.find();
        return response.json(devs);

    }
}