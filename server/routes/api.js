const express = require('express')
const urllib = require('urllib')
const router = express.Router()

router.get('/recipes/:ingredient', function (request, response) {
    const { ingredient } = request.params
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,(err, _response, res) => {
        const recipes = JSON.parse(_response)
        const recipesMappedWithSpecificProperties = recipes.results.map(recipe => {
            return {ingredients: recipe.ingredients, href: recipe.href , thumbnail: recipe.thumbnail , title: recipe.title}
        })
        response.send({recipes: recipesMappedWithSpecificProperties})
    })

})

module.exports = router