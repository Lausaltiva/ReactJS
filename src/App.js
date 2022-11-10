import "./styles/App.scss";

import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Category } from "./pages/Category";
import { Detail} from "./pages/Detail";
import ItemListContainer from "./components/ItemListContainer";



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={ <ItemListContainer /> }/>
          <Route path={"/category/:categoryId"} element={<Category />} />
          <Route path={"/product/:productId"} element={<Detail />} />
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
