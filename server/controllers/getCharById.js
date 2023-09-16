const axios = require("axios");


function getCharById(res, id) {

    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data})=>{
        
        const { id, name, image, species, origin = origin.name, status, gender } = data;
        const character = {name, gender, species, origin, id, image, status}
    
        res.end(JSON.stringify(character))
    })
    .catch((reason) => {
        res.writeHead(500, {"Content-type": "text/plain"})
        res.end(reason.message)
    })
}

module.exports = getCharById;