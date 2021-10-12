import './App.css';
import Mensajes from './mensaje';
import Final from './Final';





const Modo= (props)=>{
return <h1>{props.promo}</h1>
}



const App = ()=> {
const saludo= "hola a todos";
  return (
    <div className="App">
				<Modo promo={saludo}  />
				<Mensajes color='red' mens="hola a todos amigos"/>
				<Mensajes color='yellow' mens="hola a todos enemigos"/>
				<Final otro="ustedes si saben reacts" />

    </div>


  );
}

export default App;
