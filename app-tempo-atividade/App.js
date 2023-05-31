import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

'https://api.openweathermap.org/data/2.5/weather?q=Rio+de+janeiro&units=metric&APPID=143454aa39bbe3442a890cdbf3f9db36'

export default class App extends React.Component {
    
  
constructor(){ 
 
  super()
   
    this.state={
    tempo: {}
    }
}

componentDidMount(){
  this.pegarDados()
}
 pegarDados=async()=>{
  var link = 'https://api.openweathermap.org/data/2.5/weather?q=England&units=metric&APPID=143454aa39bbe3442a890cdbf3f9db36'

  return fetch(link).then(response => response.json()).then(responseJson => this.setState
   ({tempo: responseJson})).catch(erro => consolo.error(erro))
 }
  render(){
console.log(this.state.tempo.name); 

if(this.state.tempo.name == undefined){
return(
  <Text>Carregando.......</Text>
)

  
}else{ 
return (
      
      <View style={styles.container}>
      <Text style={styles.title}>Previsão do tempo</Text>
      <Image source = {require("./nuvens.png")} style = {styles.imagem}/>
   <Text style={styles.subTitle}>Local: {this.state.tempo.name}</Text> 
   <Text style={styles.subTitle}>Temperatura atual: {this.state.tempo.main.temp}º</Text>
   <Text style={styles.subTitle}>Temperatura minima local: {this.state.tempo.main.temp_min}º</Text>
   <Text style={styles.subTitle}>Temperatura maxima local: {this.state.tempo.main.temp_max}º</Text>
      </View> 
    );
  }
  }
}
    



const styles = StyleSheet.create({
 container: {
   flex:1
  },
  subContainer : { 
    flex: 1, 
    borderWidth: 1, 
    alignItems: 'center' 
    },
    title:{ 
      marginTop: 50, 
      fontSize: 35,
      fontWeight: '550' 
    },
    subTitle:{ 
      marginTop: 25, 
      fontSize: 20,
      fontWeight: '450' 
    },
    imagem :{ 
      width: 150, 
      height: 150, 
      marginTop: 30,
      marginHorizontal: "auto"
    },
    textContainer : { 
      flex: 1,
      alignItems: 'center', 
      flexDirection:'row', 
      marginTop:-150
    }
});
