import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar'
import Cartbuton from './Cartbuton';
import Header from './Header';
import Card from './Card'
function App() {

  return (
    <>
    <Navbar/>
    <div className="cartbut" style={{padding:'20px' ,justifyContent:'right'}}>
     <Cartbuton/>
     </div>
     <Header/>
    <div className="id"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', gap: '20px' }}>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </>
  )
}

export default App
