export const DomElements = {

    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResultList: document.querySelector('.results__list'),
    searchParent: document.querySelector('.results')
};

export const elementString = {
    loader: 'loader'
};
export const renderLoader = (parent) =>    {
    const loader = `
        <div class="${elementString.loader}">
        <svg>
            <use href="../img/icons.svg#icon-cw"></use>
        </svg>
        </div>
    `
    parent.insertAdjacentHTML('afterbegin',loader);
};
const renderButtons = (page,type)=>{

};

export const clearLoader = () => {
    const loaderContent = document.querySelector(`.${elementString.loader}`);
    if(loaderContent){
        loaderContent.parentElement.removeChild(loaderContent);
    }
}