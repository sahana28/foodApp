import React from "react";
import { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";


const ResultsShowScreen = ({ navigation }) => {
    const [results, setResults] = useState(null);
    const id = navigation.getParam('id');
    const getResults = async (id) => {
      const response = await yelp.get(`/${id}`);
      setResults(response.data);
    };

   console.log(id);
   console.log(results);

   useEffect(() => {
    getResults(id);
   }, []); 

   if(!results) {
    return null;
   }
    return (
       <View>
        <Text>{results.name}</Text>
        <FlatList  
        data={results.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
            return (
               <Image style = {styles.image} source = {{uri : item}} />
            )
        }}
        
        
        />
       </View>
    );
};

const styles = StyleSheet.create({
    image : {
        height : 200,
        width : 300,
        borderRadius : 4,
        margin : 10
    }
});

export default ResultsShowScreen;