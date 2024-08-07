// import React, {useState} from "react";
// import { Text, StyleSheet, View } from "react-native";
// import SearchBar from "../Components/SearchBar";
// import yelp from "../api/yelp";

// const SearchScreen = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);

//   const searchApi = async (searchString) => {
//      const response = await yelp.get('/search', {
//         params : {
//             limit : 50,
//             term : searchString,
//             location : 'san jose'
//         }
//      });
//      setResults(response.data.businesses);
//      console.log(searchTerm);
//      console.log(response.data.businesses);
//   };

//     return (
//       <View>
//         <SearchBar term= {searchTerm} 
//         onTermChange={(newTerm) => setSearchTerm(newTerm)} 
//         onTermSubmit = {(newTerm) => searchApi(newTerm)}
//         />
        
//        <Text>Search Text</Text>     
//        <Text>We have fund {results.length}</Text>
//       </View>
//     );
// };

// const style = StyleSheet.create({});

// export default SearchScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';


const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterListByPrice = (price) => {
    // price -> $ || $$ || $$$
    return results.filter(result => {
      return result.price === price;
    });

  };

  return (
    <View style={{ flex: 1}}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=>searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
      <ResultsList results = {filterListByPrice('$')} headerText="Cost Effective" navigation = {navigation} />
      <ResultsList results = {filterListByPrice('$$')} headerText="Bit Pricier" navigation = {navigation} />
      <ResultsList results = {filterListByPrice('$$$')} headerText="Big Spender" navigation = {navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;