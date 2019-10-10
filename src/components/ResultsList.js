import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ResultsDetail from '../components/ResultsDetail'

const ResultsList = ({title, results})=>{
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            {/* <Text>Results:{results.length}</Text> */}
            <FlatList
            horizontal={true} //or horizontal will work too
            data={results}
            keyExtractor={(result)=>result.id}
            renderItem={({item})=>{
                return <ResultsDetail result={item}/>
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default ResultsList