import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetail from '../components/ResultsDetail'
import {withNavigation} from 'react-navigation'

const ResultsList = ({title, results, navigation})=>{
    if(!results.length){
        return null;
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {/* <Text>Results:{results.length}</Text> */}
            <FlatList
            horizontal={true} //or horizontal will work too
            data={results}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result)=>result.id}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity
                     onPress={()=>navigation.navigate('ShowRestaurant',{id: item.id},'ShowRestaurant')}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 10
    },
    title:{
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default withNavigation(ResultsList)