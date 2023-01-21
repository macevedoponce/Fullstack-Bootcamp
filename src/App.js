import './App.css';
import Mensaje from './Mensaje.js'

function App() {
  const mensaje = 'Hola mundo desde variable!'
  

  const Description = () => {
    return <p>Descripcion del curso React JS</p>
  }

  return (
    <div className="App">
      <h1>Titulo de la App</h1>
      <Mensaje  color='red' message='Estamos trabajando'/>
      <Mensaje  color='green' message='en un curso de'/>
      <Mensaje  color='blue' message='REACT JS'/>
      <Description />
      <strong>Estamos trabajando en ello</strong>
      <br/>
      {mensaje + 'evaluación de jsx'}
    </div>
  );
}

export default App;
