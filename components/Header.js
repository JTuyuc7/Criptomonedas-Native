import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const Header = () => {
    return (  
        <>
        <Text style={styles.encabezado}>Criptomonedas</Text>
        
        </>
    );
}

const styles = StyleSheet.create({
    encabezado:{
        paddingTop: Platform === 'ios' ? 50 : 20,
        fontFamily: 'Lato-Black',
        backgroundColor: '#7724DA',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#FFF',
        fontSize: 20,
        marginBottom: 30
    }
});

export default Header;