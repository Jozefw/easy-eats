import axios from 'axios';

const key = '4ede74b9084fe8586f90c8b8682a2460';
const proxy = 'https://cors-anywhere.herokuapp.com/'

async function getResults(query){
    try {
        const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        console.log(result);    
    } catch (error) {
        console.log(error);
    }

}

getResults('pizza')