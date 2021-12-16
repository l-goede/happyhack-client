import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LottieControl from "./LottieControl";


function NotFound() {

     const [someJsonThree, setJsonThree] = useState(null)

     useEffect(() => {
       const getData = async () => {
         let res = await axios.get("https://assets10.lottiefiles.com/packages/lf20_sdd6siet.json")
         setJsonThree(res.data)
       }
       getData()
     }, [])
     
     if (!someJsonThree ) {
      return <p>⌛</p>;
      }



  return (
    <div className="centeredDiv404">

      <div className="centered404">
     <LottieControl className="lottie404" animation={someJsonThree}/> 
      <button class="page404Styling" id="profile-btn">
          <Link style={{textDecoration: "none", color: "#2e2c2c"}} to="/"> Back to home</Link>
      </button> 
      </div>

    </div>
  )
}

export default NotFound

