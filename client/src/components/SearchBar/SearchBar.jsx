import { useState } from "react";
import style from "./SearchBar"

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("")

   const handleChange = (event) => {
      const {value} = event.target;
      setId(value)
   }
   return (
      <div className={style.searchbar}>
         <input type='search' onChange={handleChange}/>
         <button onClick={()=> onSearch(id)}>Agregar</button>
      </div>
   );
}
