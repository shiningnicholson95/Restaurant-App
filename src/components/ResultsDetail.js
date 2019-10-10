import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ResultsDetail = ({result})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:result.image_url}} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <View style={styles.rateReviewStyle}>
                <Text>Rating:{result.rating}</Text>
                <Text>Reviews:{result.review_count}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    image:{
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 5
    },
    nameStyle:{
        fontWeight: 'bold'
    },
    rateReviewStyle:{
        flexDirection: 'row',
        fontWeight: 'bold'
    },
    container:{
        marginLeft: 15
    }
})

export default ResultsDetail