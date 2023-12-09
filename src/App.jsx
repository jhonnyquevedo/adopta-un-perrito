import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card2 from './components/Card2'
import Footer from './components/Footer'

function App() {
  
  return (
    <div className="header">
      <Header  titulo={"Adopta un perrito"}/>

      <div className="container">
        <Card2 
        direccion={"https://placedog.net/286/180?id=164"}
        titulo={"Bartolo"} 
        descripcion={"Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!" }
        br={<br />}
        colorBg={"success"}
        textoBg={"Husky"}
        />
       
        <Card2 
        direccion={"https://placedog.net/286/180?id=227"}
        titulo={"Messi"} 
        descripcion={"Es jugueton, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"}
        colorBg={"primary"}
        textoBg={"Wolf"}
        />

        <Card2 
        direccion={"https://placedog.net/286/180?id=112"}
        titulo={"Gohan"} 
        descripcion={"Un perro obediente con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"}
        colorBg={"danger"}
        textoBg={"Half Blood"}
        />

        <Card2 
        direccion={"https://placedog.net/286/180?id=51"}
        titulo={"Princesa"} 
        descripcion={"Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a princesa a encontar un hogar!"}
        colorBg={"warning"}
        textoBg={"French bulldog"}
        />
      </div>
      
      <footer> <strong>
        <Footer textoFooter={"Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes características, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre. "}/></strong>
      </footer>
    </div>
  );
}

export default App;
