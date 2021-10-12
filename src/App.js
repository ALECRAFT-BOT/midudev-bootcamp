import './App.css';
import Mensajes from './mensaje';
import Final from './Final';









const App = ()=> {

  return (
    <div className="App">
				<Mensajes color='red' mens="hola a todos amigos"/>
				<Mensajes color='blue' mens="hola a todos enemigos"/>
				<Final otro="ustedes si saben reacts" />

    </div>


  );
}

export default App;
