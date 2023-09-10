import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../../components/Card/Card";
import { useDispatch } from "react-redux";
import { removeFav } from "../../redux/actions";
const Favorites = () => {
    const myFavorites = useSelector(state => state.myFavorites);
    const dispatch = useDispatch();

    const handleRemFav = (id) => {
        dispatch(removeFav(id));
    }
    return (
        <div>
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