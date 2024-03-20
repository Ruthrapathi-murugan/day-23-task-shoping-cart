import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Header from './Header';
import Card from './Card';

function App() {
  return (
    <>
      <Navbar />
      <div className="cartbut" style={{ padding: '20px', justifyContent: 'right' }}></div>
      <Header />
      <div className="container">
      <div className="row">
      <div className="id" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', gap: '20px', flexWrap: 'wrap' }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> 
      </div>
      </div>
      </div>
     
     
    </>
  );
}

export default App;
