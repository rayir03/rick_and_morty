import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";


export default function Nav({onSearch}){
    return (
        <div className={style.container}>
            <div className={style.searchBar}>
                <SearchBar onSearch={onSearch}/>
            </div>   
            
            <Link to="/home" className={style.linkButton}>
                <button className={style.button}>Home</button>
            </Link>

            <Link to="/about" className={style.linkButton}>
                <button className={style.button}>About</button>
            </Link>
            
            <Link to="/favorites" className={style.linkButton}>
                <button className={style.button}>Favorites</button>
            </Link>
            <Link to="/">
                <button className={style.button} onClick={() => window.location = "/"} >Logout</button>
            </Link>
            
        </div>
        
    )
}
