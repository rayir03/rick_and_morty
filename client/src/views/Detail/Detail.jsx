import { useParams } from "react-router-dom"
import { useState , useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import style from "./Detail.module.css";

export default function Detail(onSearch) {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return !character.image ? <h1 className={style.loadingText}>Cargando...</h1>
    :(<div className={style.characterContainer}>
        <img src={character?.image} alt="" className={style.characterImage}/>
        <h2 className={style.characterName}>{character?.name}</h2>
        <div className={style.characterDetails}>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.origin?.name}</h2>
        </div>
    </div>)
}