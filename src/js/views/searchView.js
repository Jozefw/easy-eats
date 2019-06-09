import {DomElements} from './base';
export const clearInput = function(){
    DomElements.searchInput.value = ''
};
export const clearResults = function(){
    DomElements.searchResultList.innerHTML= '';
};
export const getInput = () => DomElements.searchInput.value;

const limitRecipeTitle = (title,limit = 17) => {
    return (title.length > limit) ? `${title.substring(0,limit)}...`  : title;
};

const renderRecipe = (recipe)=>{
    const markup = `  <li>
    <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
            <p class="results__author">${recipe.publisher}</p>
        </div>
    </a>
</li>`
DomElements.searchResultList.insertAdjacentHTML("beforeend",markup);
};

export const renderResults = (recipes,page = 1, resPerPage = 10)=>{

    const start = (page-1)*resPerPage;
    const end = page * resPerPage;
    recipes.slice(start,end).forEach(renderRecipe);
}