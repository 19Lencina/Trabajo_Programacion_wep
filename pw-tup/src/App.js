import log from "./logo.svg";
import './App.css';

function App() {

  return (
<div>
<h1>Bienvenidos al churasco</h1>
    <ul className="menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a className="link" href="Accesorios.html">Accesorios</a></li>
    </ul>
    <section className="img">
    <center>
    <h2>Productos</h2>
    
    
    <h3>Nalga</h3>
    <img src="img.pj/nalga14.jpg"/>
    <h4 className="price">Precio por kilo:$850</h4>
    
    
    <h3>Costilla</h3>
    <img src="img.pj/costilla.16.jpg"/>
    <h4 className="950">Precio por kilo:$950 </h4>
    

    <h3>Entrelot</h3>
    <img src="img.pj/entrecot-15.jpg"/>
    <h4 className="price">Precio por kilo:$550</h4>
    
    
    <h2>Ofertas</h2>
    
    
    <h3>Asado</h3>
    <img src="img.pj/asado.17.jpg"/>
    <h4 className="price">Precio por kilo:$750</h4>
    </center>
    </section> 
</div>
  );
}



export default App;

