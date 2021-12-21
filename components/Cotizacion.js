import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    return (  
        <View style={styles.resultado}>
            <Text style={styles.texto_titulo}>Cotizacion</Text>
            <Text style={[styles.texto ,styles.precio]}> Precio {" "}
                <Text style={styles.span}>{resultado.PRICE}</Text>
            </Text>
            <Text style={styles.texto}> Precio mas alto del dia {" "}
                <Text style={styles.span}>{resultado.HIGHDAY}</Text>
            </Text>
            <Text style={styles.texto}> Precio mas bajo del dia {" "}
                <Text style={styles.span}>{resultado.LOWDAY}</Text>
            </Text>
            <Text style={styles.texto}>Variacion ultimas 24 horas: {" "} 
                <Text style={styles.span}> {resultado.CHANGEPCT24HOUR} %</Text>
            </Text>
            <Text style={styles.texto}>Utima actualizacion {" "}
                <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultado:{
        backgroundColor: "#5E49E2",
        padding: 20,
        marginTop: 20,
        maxWidth: "95%",
        borderRadius: 15,
        marginHorizontal: 15,
        marginBottom: 15
        
    },
    texto:{
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 15,
        color: '#FFF',
        fontFamily: 'Lato-Regular'
    },
    precio:{
        fontSize: 30
    },
    span:{
        fontWeight: "bold",
        fontFamily: 'Lato-Black'
    },
    texto_titulo:{
        fontWeight: "bold",
        color: '#FFF',
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 10,
        textTransform: 'uppercase'
    }
});

export default Cotizacion;