import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css"
export default function Form({login}) {
    const [ userData, setUserData ] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors ] = useState({});

    function handleChange(event) {
        const {name, value} = event.target;
        setUserData((prevInput) => ({
            ...prevInput,
            [name]:value,
            
        }));
        setErrors(validation({
            ...userData,
            [name] : value,
        }))
    };

    function handleSubmit(event) {
        event.preventDefault();
        login(userData);

    }

    return <div className={style.form}>
        <form onSubmit={handleSubmit}>
            <img
          src={
            "https://th.bing.com/th/id/R.621f369dd1ae3c61d73d5c9e09b8520a?rik=ZKkEmc%2bYXmF9LA&pid=ImgRaw&r=0"
          }
          alt="login"
            />
            <div className={style.form_email}>
                <label htmlFor="">email</label>
                <input type="text" name="email" value={userData.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
            </div>
            
            
            <div className={style.form_password}>
                <label htmlFor="">password</label>
                <input type="password" name="password" value={userData.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            
            <button className={style.button}type="submit">Submit</button>
        </form>
    </div>
}