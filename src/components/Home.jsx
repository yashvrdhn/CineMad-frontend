import React, { useContext , useEffect } from 'react'

// import Navigation from "./Navigation";
import Nav from './Nav';
import Foot from './Foot';
import { JwtContext } from '../JwtContext';
import Movie from './MovieView';
import MovieTwo from './MovieView2';
import SessionExpired from './SessionExpired';



function getCookie(name) {
  const cookieString = decodeURIComponent(document.cookie);
  const cookies = cookieString.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}


const Home = () => {


  const { jwt, setJwt } = useContext(JwtContext)
   
  console.log(jwt, " : is jwt initailly in home")
  var temp = getCookie("jwt")
  if(jwt === ""){
    setJwt(temp)
  }
  console.log(jwt, " : is jwt after in home")
  return (
    <>
      {/* <Navigation /> */}
     
      <Nav />
      <div className='bg-gray-700'>
        <Movie />
        {
          jwt == null || jwt === "" ? <></>:<MovieTwo/>
        }
        
        <Foot />
         </div>
       
     
      {/* <Footer /> */}
     
     
      </>
  )
}

export default Home