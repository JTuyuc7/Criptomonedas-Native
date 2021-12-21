import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';


const Formulario = ({ moneda, criptomoneda, guardarMoneda, guardarCriptomoneda, guardarconsultarApi }) => {

    
    const [ criptomonedas, guardarCriptomonedas ] = useState([]);
    //const [ alerta, mostrarAlerta ] = useState(false);

    useEffect(() =>{
        const consultarApi = async () =>{
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const resultado = await axios.get(url);
            console.log(resultado.data.Data);
            guardarCriptomonedas(resultado.data.Data)
        }
        consultarApi();
    }, [] );

    // Almacena las selecciones del usuario
    const obtenerMoneda = (moneda) =>{
        guardarMoneda(moneda);
        console.log(moneda);
    }

    const obtenrCriptomoneda = (criptomoneda) =>{
        guardarCriptomoneda(criptomoneda);
        console.log(criptomoneda)
    }

    // Solicitar la cotizacion
    const cotizarCriptomoneda = () =>{
        
        if(moneda.trim() === '' || criptomoneda.trim() === ''){
            mostrarAlerta();
            return;
        }
        
    
        guardarconsultarApi(true);
    }

    const mostrarAlerta = () =>{
        Alert.alert(
            'Error',
            'Los campos son Obligatorios',
            [
                {text: 'Ok'}
            ]
        )
    }

    return (  
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
                selectedValue={moneda}
                onValueChange={moneda => obtenerMoneda(moneda) }
                itemStyle={{ height: 120 }}
            >
                <Picker.Item label="-Seleccione-" value="" />
                <Picker.Item label="Dolar de Estados Unidos" value="USD" />
                <Picker.Item label="Peso Mexicano" value="MXN" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra Esterlina" value="GBP" />
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>
            <Picker
                selectedValue={criptomoneda}
                onValueChange={criptomoneda => obtenrCriptomoneda(criptomoneda)}
                itemStyle={{ height: 120 }}
            >
                <Picker.Item label="-Seleccione-" value="" />
                {criptomonedas.map( cripto => (
                    <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
                ))}
            </Picker>
                <TouchableHighlight
                    style={styles.btnCotizar}
                    onPress={ () => cotizarCriptomoneda() }
                >
                    <Text
                        style={styles.textoCotizar}
                    >Cotizar Criptomoneda</Text>
                </TouchableHighlight>

        </View>
    );
}

const styles = StyleSheet.create({
    label:{
        fontFamily: 'Lato-Black',
        fontSize: 22,
        textTransform: 'uppercase',
        marginVertical: 20,
    },
    btnCotizar:{
        padding: 15,
        marginTop: 20,
        

    },
    textoCotizar:{
        fontFamily: 'Lato-Black',
        backgroundColor: '#55199C',
        color: '#FFF',
        width: '100%',
        textTransform: 'uppercase',
        padding: 15,
        textAlign: 'center',
        fontSize: 19,
        borderRadius: 10
    }
});

export default Formulario;