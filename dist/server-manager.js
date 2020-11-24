class ServerManager {

    getRecipes = (ingredient,renderFunction) => $.get(`/recipes/${ingredient}`, recipes => renderFunction(recipes))

}