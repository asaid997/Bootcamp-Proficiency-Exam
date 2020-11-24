class ServerManager {

    getRecipes(ingredient,renderFunction) {

        $.get(`/recipes/${ingredient}`, function (recipes) {
            console.log(recipes)
            renderFunction(recipes)
        })

    }

}