import React from "react";
import {Text, View, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({results}) => {
      return (
      <View style = {styles.container}>
       <Image style = {styles.imageStyle} source={{ uri: results.image_url }} />
       <Text style = {styles.titleStyle}> {results.name}</Text>
       <Text>{results.rating} Stars, {results.review_count} Reviews</Text>
      </View>
      )
};
const styles = StyleSheet.create({
    container : {
        marginLeft : 15
    },
    titleStyle : {
        fontSize : 16,
        fontWeight : 'bold'
    },
    imageStyle : {
        width: 250,
        height: 120,
        borderRadius : 4
    }
});

export default ResultsDetail;