import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async  getResults(query){
        const key = '4ede74b9084fe8586f90c8b8682a2460';
        const proxy = 'https://cors-anywhere.herokuapp.com/'

        try {
            const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.recipes = result.data.recipes;    
        } 
        catch (error) {
            console.log(error);
        }
    
    }


}