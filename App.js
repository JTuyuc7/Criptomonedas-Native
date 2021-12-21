

import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Image, View, ScrollView} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import axios from 'axios';


const App = ()  => {
  
  // State para leer los picker
  const [ moneda, guardarMoneda ] = useState("");
  const [ criptomoneda, guardarCriptomoneda ] = useState("");
  const [ consultarapi, guardarconsultarApi ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});
  const [ cargando, guardarCargando ] = useState(false);

  useEffect(()=>{
    if(consultarapi){
      console.log("Listo para cotizar...");
      // consultar la api para tener la cotizacion
      const cotizarCriptomoneda = async () =>{
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        console.log(resultado.data.DISPLAY[criptomoneda][moneda]);

        guardarCargando(true);

        // Mostrar una spinner cuando se consulta la Api
        setTimeout(() =>{
  
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
          guardarconsultarApi(false);
          guardarCargando(false);

        }, 3000)

      }
      cotizarCriptomoneda();
    }
  }, [consultarapi])

  const componete = cargando ? <ActivityIndicator size="large" color="#5E492" /> : <Cotizacion resultado={resultado} />

  return (

    <>
      <ScrollView>
          <Header />
          
          <Image
            style={styles.imagen}
            source={require('./assets/img/cryptomonedas.png')}
          />
          <View style={styles.contenido}>
            <Formulario 
              moneda={moneda}
              criptomoneda={criptomoneda}
              guardarMoneda={guardarMoneda}
              guardarCriptomoneda={guardarCriptomoneda}
              guardarconsultarApi={guardarconsultarApi}
            />
          </View>
          <View style={{ marginTop: 30 }}>
              {componete}
          </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imagen:{
    width: '100%',
    height: 190,
    marginHorizontal: '2.5%'
  },
  contenido:{
    marginHorizontal: '2.5%',

  }
});

export default App;

