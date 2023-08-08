
import './index.css'
import NavBar from './components/NavBar'
import Card from './components/Card'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <div className='container galeriaProductos'>
          <div className='row'>
          <div className='col-2 m-3 card'>
          <ItemListContainer greeting="Regalos grosos para gente grosa"/>
          </div>
       
            <Card 
            title="CORPORATIVOS"
            img='../img/empresarial.jpg'
            description="Propuestas argentinas, adaptables a las necesidades de tu empresa."  
            />
            <Card 
            title="AL EXTERIOR"
            img='../img/exterior.jpg'
            description=" Regalos muy argentinos. Para el que se va, para el que extraña, para el que simpatiza..."         
            />
           
          </div> 
      </div> 
    </>
  )
}
export default App
