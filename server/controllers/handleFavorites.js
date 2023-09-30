
let myFavorites = [];

function postFav(req, res) {
    const { character } = req.body
    myFavorites.push(character)
    res.json(myFavorites)
}

function deleteFav(req, res) {
    const {id} = req.params;
    myFavorites = myFavorites.filter(char => char !== Number(id))
    res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav,
}