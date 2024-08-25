import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Header from './Components/Header/Header';
import Hero from './Frontend/Hero/Hero';
import Companies from './Frontend/Companies/Companies';
import Resdencies from './Frontend/Resdencies/Resdencies';
import Value from './Frontend/Value/Value';
import Contact from './Frontend/Contact/Contact';
import Started from './Frontend/Started/Started';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
 <Header/>
<Hero/>
<Companies/>
<Resdencies/>
<Value/>
<Contact/>
<Started/>
<Footer/> 
    </>
  );
}

export default App;
