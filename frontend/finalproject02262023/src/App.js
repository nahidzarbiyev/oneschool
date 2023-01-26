import { useState } from 'react';
import './App.scss';
import Footer from './layouts/footer';
import Header from './layouts/header';
import Routing from './routes';

function App() {
const [favorite, setFavorite] = useState([])

  return (
 <>
<Header/>
<Routing favorite={favorite} setFavorite={setFavorite}/>
<Footer/>
 </>
  );
}

export default App;
