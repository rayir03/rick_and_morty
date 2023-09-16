import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../../components/Card/Card";
import { useDispatch } from "react-redux";
import { removeFav } from "../../redux/actions";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = () => {
    const myFavorites = useSelector(state => state.myFavorites);
    const dispatch = useDispatch();
    

    const handleRemFav = (id) => {
        dispatch(removeFav(id));
    }

    const handlerOrder = (event) =>{
        const order = event.target.value;
        dispatch(orderCards(order));
        
    }

    const handlerFilter = (event) =>{
        const filter = event.target.value;
        dispatch(filterCards(filter));
        
    }
    return (
        <div>
            <div className="favorites__ordered">
                <select onChange={handlerOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendete</option>
                </select>
            </div>

            <div className="favorites__filter">
                <select onChange={handlerFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknow">unknow</option>
                </select>
            </div>
            {myFavorites.map((props) => {
            
                return (
                    <Card
                        key={props.id}
                        id={props.id}
                        name={props.name}
                        species={props.species}
                        gender={props.gender}
                        origin={props.origin.name}
                        image={props.image}
                        onClose={()=> handleRemFav(props.id)}
                        
                    />
                    
                )
            })}
        </div>
    )
}
export default Favorites;