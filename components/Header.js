import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title} >Normie To-DO App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
header: {
    height: 80,
    paddingTop: 48,
    paddingBottom: 50,
    backgroundColor: 'cornflowerblue'
},
title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
}
});