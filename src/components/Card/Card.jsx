import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addFav, removeFav} from "../../redux/actions";
import { useState, useEffect } from "react";



export default function Card(props, /*{id, name, status, species, gender, origin, image, onClose }*/) {

   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(!isFav);
         dispatch(removeFav(props.id))
      } else {
         setIsFav(!isFav)
         dispatch(addFav(props))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         } 
      });
   }, [myFavorites]);

   return (
      <div id={props.id} className={styles.card}>
        {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={()=>props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}><h2>{props.name}</h2></Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt={props.name} />
         
      </div>
   );
}
