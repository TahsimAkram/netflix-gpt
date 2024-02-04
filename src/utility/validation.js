export const validateCredentials = (email,password)=>{
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    console.log(isEmailValid);
    console.log(isPasswordValid);
    if(!isEmailValid || !isPasswordValid) return "Invalid Credentials";
    return null; 
}
