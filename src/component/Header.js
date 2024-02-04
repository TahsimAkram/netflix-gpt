import {NETFLIX_LOGO_CDN_URL } from "../utility/constants";

const Header = ()=>{
    return(
        <div className="">
            <img className="w-48 ml-36" src={NETFLIX_LOGO_CDN_URL} alt="netflix_logo"></img>
        </div>
    )
}

export default Header;