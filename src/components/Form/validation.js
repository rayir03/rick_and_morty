

export default function validation(userData) {
    const errors = {};
    const regExEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    const validateEmail = userData.email.length && userData.email.length <= 35 && regExEmail.test(userData.email);
    if(userData.email && !validateEmail) {
        errors["email"] = "Por favor un email válido";
    } else {
        errors["email"] = "";
    }
    
    const regexPassword = /^(?=.*\d).{6,10}$/;
    const validatePassword = regexPassword.test(userData.password);
    if(!validatePassword && userData.password) {
        errors['password'] = "Ingresa un password válido";
    }else {
        errors['password'] = "";
    }

    return errors
}