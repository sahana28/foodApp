import React from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ headerText, results, navigation }) =>  {
    if (!results.length) {
        return null;
    }
    //console.log(results);
  return <View style = {styles.container}>
   <Text style={styles.titleStyle}>{headerText}</Text>
   <FlatList
   horizontal = {true}
   showsHorizontalScrollIndicator = {false}
   data = {results}
   keyExtractor={results => results.id}
   renderItem={({ item }) => {
   // return <Text>{item.name}</Text>;
   
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
        <ResultsDetail results={item}/>
        </TouchableOpacity>
    )   
   }}
   />
  </View>
};

const styles =  StyleSheet.create({
   titleStyle: {
      fontSize : 18,
      fontWeight : 'bold',
      marginLeft : 15,
      marginBottom : 5
   },
   container : {
    marginBottom : 10
   }

});

export default withNavigation(ResultsList);