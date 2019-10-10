import React from 'react';
import {View, Text, StyleSheet,TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons';
const SearchBar = ({term, onTermChange, onTermSubmit})=>{
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                style={styles.inputStyle} 
                placeholder="Search"
                onChangeText={newTerm=>onTermChange(newTerm)}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}
const styles=StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:"row"
    },
    inputStyle:{
        fontSize: 20,
        flex: 1
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
export default SearchBar