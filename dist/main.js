const renderer = new Renderer()
const serverManager = new ServerManager()

$('#get-recipes').on("click", function () {
    const ingredient = $('#ingredient').val()
    serverManager.getRecipes(ingredient, renderer.recipesHandleBarAppender)
})

$('#recipes-container').on("click", "img", function () {
    console.log($(this).closest(".recipe-container").find("li:first-child").text())
})
