import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './views/About/About';
import Detail from './views/Detail/Detail';
import Form from './components/Form/Form';
import Login from './views/Login/Login';
import Home from './views/Home/Home';



function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const EMAIL = "ejemplo@gmail.com";
   const PASSWORD = "unaPassword1"
   const navigate = useNavigate()
   const location = useLocation();
   const onClose = (id) => {
      const filtersId = characters.filter((char) => char.id !== id);
      setCharacters(filtersId);
   };

   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
         
         {location !== "/" && <Nav onSearch={onSearch}/>}
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Routes >
            <Route path="/" element={<Login login={login} />}></Route>
            <Route path="/home" element={<Home characters={characters} onClose={onClose}/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
            
         </Routes>
         
         
      </div>
   );
}

export default App;
