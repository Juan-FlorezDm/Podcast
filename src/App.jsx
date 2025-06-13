import './App.css'
import Plano_uno from './components/Plano_uno'
import Servicios from './components/Servicios'

function App() {

  return (
    <div className='App'>
      <div className='izquierda'> 
        <Plano_uno />
      </div>
      <div className='derecha'>
        <div className='content'>
          <Servicios />
        </div>
      </div>
    </div>

  )
}

export default App
