import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = ()=>{
const[term, setTerm] = useState('');
const [searchApi, results, error] = useResults();

const filterResultsByPrice = (price)=>{
    //price === '$' || '$$' || '$$$'
    return results.filter(result=>{
        return result.price === price
    })
}

    return(
        <View>
            <SearchBar 
            term={term}
            onTermChange={(newTerm)=>{setTerm(newTerm)}}
            onTermSubmit={()=>{searchApi(term)}}
            />
            {error?<Text>{error}</Text>:null}
            <Text>We have found {results.length} results</Text>
            <ResultsList results={filterResultsByPrice('$')} title='cost effective'/>
            <ResultsList results={filterResultsByPrice('$$')} title='bit pricier'/>
            <ResultsList results={filterResultsByPrice('$$$')} title='big spender'/>
        </View>
    )
}
export default SearchScreen