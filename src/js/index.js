import Search from './models/Search';
import * as searchView from './views/searchView';
import {DomElements,renderLoader,clearLoader} from './views/base';


// Global State of App
// - Search Object
// - Current recipe object
// - shopping list object
// - list of recipes object

const state = {};

const searchController = async ()=>{
    // get search text from query
    const query = searchView.getInput();
    console.log(query);
    if(query){
        // add to state
        state.search = new Search(query);

        // prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(DomElements.searchParent);

        // search for recipes
        await state.search.getResults();

        // render results to UI
       clearLoader();
        searchView.renderResults(state.search.recipes);
    }
};

DomElements.searchForm.addEventListener('submit',e =>{
    e.preventDefault();
    searchController();
});

