import { useRef, useState } from "react";
import { NETFLIX_BG_CDN_URL } from "../utility/constants";
import Header from "./Header";
import { validateCredentials } from "../utility/validation";
import { signIn, signUp } from "../utility/userCreationAPI";

const Login = ()=>{
    const [isSignIn, setIsSignIn] = useState("Sign In");
    const [errorMessage,setErrorMessage] = useState(null);
    const userName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignIn = ()=>{
        isSignIn==="Sign In"? setIsSignIn("Sign Up"):setIsSignIn("Sign In");
    }

    const handleLogin = ()=>{
        console.log(email);
        console.log(password);
        const isValidCredentials = validateCredentials(email.current.value,password.current.value);
        if(isValidCredentials==null){
            if(isSignIn === 'Sign In'){
                //Sign In logic
                signIn(email.current.value,password.current.value,setErrorMessage);
            }else{
                //Sign Up logic
                signUp(email.current.value,password.current.value,setErrorMessage);
            }
        }else{
            setErrorMessage(isValidCredentials);
            return;
        }
    }

    return (
        <div style={{backgroundImage:`url(${NETFLIX_BG_CDN_URL})`,alt:"netflix_bg",height:"100%",backgroundPosition:"center",backgroundSize:"cover"}}>
            <Header/>
            <div className="w-4/12 mx-auto mt-9 mb-9 p-16 bg-black opacity-85 rounded-md">
                <h1 className="text-white text-3xl font-bold mb-4">{isSignIn}</h1>
                <form onSubmit={(e)=>e.preventDefault()}>
                    {errorMessage && <p className="text-red-600 font-bold text-lg">{errorMessage}. Please check your credentials and try again</p>}
                    {isSignIn === "Sign Up" && <input type="text" placeholder="UserName" ref={userName} className="border-2 rounded-md w-full mt-4 p-3 bg-black opacity-85 text-white"/>}
                    <input type="text" ref={email} placeholder="Email or phone number" className="border-2 rounded-md w-full mt-4 p-3 bg-black opacity-85 text-white"/>
                    <input type="password" ref={password} placeholder="Password" className="border-2 rounded-md w-full mt-4 p-3 bg-black opacity-85 text-white"/>
                    <button type="submit" onClick={handleLogin} className="w-full bg-red-600 rounded-md py-2 mt-4 text-white  ">{isSignIn}</button>
                </form> 
                {isSignIn === "Sign In" && <h1 className="text-white text-center mt-6">Forgot password?</h1> }
                {isSignIn === "Sign In" ? <h2 onClick={toggleSignIn} className="text-white mt-16">New to Netflix? <span className="font-semibold cursor-pointer">Sign up now</span>.</h2>:
                <h2 onClick={toggleSignIn} className="text-white mt-16">Already registered? <span className="font-semibold cursor-pointer">Sign In</span></h2>
                }
            </div>
        </div>
    )
}
export default Login;