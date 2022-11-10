import "./styles/App.scss";

import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Category } from "./pages/Category";
import { Detail} from "./pages/Detail";
import ItemListContainer from "./components/ItemListContainer";
import { UserLayout } from "./components/UserLayout";



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserLayout>
          <Routes>
            <Route path={"/"} element={ <ItemListContainer /> }/>
            <Route path={"/category/:categoryId"} element={<Category />} />
            <Route path={"/product/:productId"} element={<Detail />} />
          </Routes>
          </UserLayout>
      </BrowserRouter>   
    </div>
  );
}

export default App;
