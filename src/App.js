import './App.scss';
import Navbar from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import Footer from "./components/footer"



function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
