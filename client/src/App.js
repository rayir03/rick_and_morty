import './App.css';

import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './views/About/About';
import Detail from './views/Detail/Detail';

import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Favorites from './views/Favorites/Favorites';
import { removeFav } from './redux/actions';
import { useDispatch } from 'react-redux';



function App() {
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation()
   const [access, setAccess] = useState(false);
   const EMAIL = "ejemplo@gmail.com";
   const PASSWORD = "12345678M"
   const navigate = useNavigate()
   const dispatch = useDispatch()
   
   const onClose = (id) => {
      
      const filtersId = characters.filter((char) => char.id !== id);
      setCharacters(filtersId);
      dispatch(removeFav(id))
   
   };

   
   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
          if (data.name) {
            if(!characters.some((char) => char.id === data.id)) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert("Este personaje esta en la lista");
            }
               
          } 
         else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function login(userData) {
      if(userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate("/home");
      } else {
         alert("Usuario o password incorrectos");
      }
   }
   useEffect(() => {
      !access && navigate("/");

   }, [access]);

   return (
      <div className='App'>
         
         { pathname !== "/" && <Nav onSearch={onSearch}/>}
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Routes >
            <Route path="/" element={<Login login={login} />}></Route>
            <Route path="/home" element={<Home characters={characters} onClose={onClose}/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
            <Route path="/favorites" element={<Favorites/>}></Route>
            
         </Routes>
         
         
      </div>
   );
}

export default App;
