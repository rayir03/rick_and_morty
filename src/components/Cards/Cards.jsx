import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
   return (
      <div className={styles.container}>
         {characters.map(({id, name, species, gender, origin, image })=> {
            return (
               <Card
                  key={id}
                  id={id}
                  name={name}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={onClose}
               />
            )
         } )}
      </div>
   )
}
