class Renderer {
    constructor() {
        const source = $('#recipe-template').html();
        this._recipeTemplate = Handlebars.compile(source);
    }

    _handleBarAppender = (elementToAppendTo, Template, data) => {
        let newHTML = Template(data);
        elementToAppendTo.empty().append(newHTML);
    }

    recipesHandleBarAppender = (recipes) => this._handleBarAppender($('#recipes-container'), this._recipeTemplate, recipes)


}