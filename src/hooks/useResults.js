import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default ()=>{
    const[results,setResults] = useState([]); //array of objects is our concern thats why the array
const [error, setError] = useState('');


const searchApi = async(searchTerm)=>{
    console.log('hii there')
    try{
        const response = await yelp.get('/search',{
            params:{
                limit: 50,
                term: searchTerm,
                location:'san jose'
            }
        });
        setResults(response.data.businesses);
    } catch(err){
        setError('something went wrong')
        console.log(err);
    }
}

useEffect(()=>{
    searchApi('pasta')
},[])
return [searchApi, results, error]
}